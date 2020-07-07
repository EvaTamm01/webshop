import { Component, OnInit } from '@angular/core';
import { AuthService, AuthResponseData } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    //let users = this.authService.getAllUsers();
    //console.log(users);
  }

  onLogin(loginForm: NgForm) {
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.login(loginForm.value.username, loginForm.value.password);
    authObs.subscribe(resData => {
      this.router.navigateByUrl("/admin");
    }, error => {
      this.error = error;
      
    });
    
    
    
  }

}
