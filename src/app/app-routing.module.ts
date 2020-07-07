import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ItemViewComponent } from './items-list/item-view/item-view.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { NewItemComponent } from './admin/new-item/new-item.component';
import { AuthGuard } from './auth/auth.guard';

 // sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', component: ItemsListComponent },
  { path: 'view/:id', component: ItemViewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrate', component: RegistrationComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/new-item', component: NewItemComponent, canActivate: [AuthGuard]  },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }