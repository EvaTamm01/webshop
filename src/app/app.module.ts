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
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { NewItemComponent } from './admin/new-item/new-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { UniquePipe } from './items-list/unique.pipe';
import { FilterByCategoryPipe } from './items-list/filter-by-category.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseComponent } from './database/database.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemsListComponent,
    FooterComponent,
    ItemViewComponent,
    CartComponent,
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    AdminComponent,
    NewItemComponent,
    UniquePipe,
    FilterByCategoryPipe,
    DatabaseComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularToastifyModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
