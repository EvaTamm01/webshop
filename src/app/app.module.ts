import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemViewComponent } from './items-list/item-view/item-view.component';
import { RouterModule } from '@angular/router';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
//import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemsListComponent,
    FooterComponent,
    ItemViewComponent,
    CartComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularToastifyModule,
    FormsModule
    //MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
