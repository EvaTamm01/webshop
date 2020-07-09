import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/internal/operators/tap';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';
import { Admin } from './admin.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: string;
  admin = new BehaviorSubject<Admin>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9yVsHLDFO5094TqtUzFStVAmmX7ZVQMA',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9yVsHLDFO5094TqtUzFStVAmmX7ZVQMA',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('dataOfUser'));
    if (!userData) {
      return;
    }

    const loadedUser = new Admin(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.admin.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.admin.next(null);
    this.router.navigate(['/']);
    localStorage.removeItem('dataOfUser');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const admin = new Admin(email, userId, token, expirationDate);
    this.admin.next(admin);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('dataOfUser', JSON.stringify(admin));
  }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Tekkis tundmatu error!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'See e-mail on juba olemas.';
        break;
      case 'WEAK_PASSWORD : Password should be at least 6 characters':
        errorMessage = 'Parool peab olema vähemalt 6-kohaline.';
        break;
      case 'MISSING_PASSWORD':
        errorMessage = 'Palun sisesta parool.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Sellist e-maili ei eksisteeri.';
        break;
      case 'INVALID_EMAIL':
        errorMessage = 'Kontrolli e-maili õigust.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Parool ei ole korrektne.';
        break;
    }
    return throwError(errorMessage);
  }
}