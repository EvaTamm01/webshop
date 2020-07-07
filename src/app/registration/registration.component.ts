import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../auth/auth.service';
import { ToastService } from 'angular-toastify';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  error: string;

  constructor(private authService: AuthService, private _toastService: ToastService,) { }

  ngOnInit(): void {
  }

  onRegistrate(registrationForm: NgForm) {
    //this.authService.saveNewUser(registrationForm.value);
console.log(registrationForm.value.username);
console.log(registrationForm.value.username);
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.signUp(registrationForm.value.username, registrationForm.value.password);
    authObs.subscribe(resData => {
        
    }, error => {
      this.error = error;
     
    });

    this.authService.signUp(registrationForm.value.username, registrationForm.value.password);
    registrationForm.reset();
    this._toastService.success("Edukalt registreeritud");
    
  }

}
