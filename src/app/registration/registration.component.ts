import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService, private _toastService: ToastService,) { }

  ngOnInit(): void {
  }

  onRegistrate(registrationForm: NgForm) {
    this.authService.saveNewUser(registrationForm.value);
    registrationForm.reset();
    this._toastService.success("Edukalt registreeritud");
    
  }

}
