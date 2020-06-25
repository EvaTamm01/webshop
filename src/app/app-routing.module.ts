import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { ItemViewComponent } from './items-list/item-view/item-view.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

 // sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', component: ItemsListComponent },
  { path: 'view/:id', component: ItemViewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }