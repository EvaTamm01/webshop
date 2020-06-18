import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';

 // sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'view/:id', component: ItemsListComponent },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }