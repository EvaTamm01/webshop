import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ItemService } from '../items-list/item.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userData: string;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.authService.admin.subscribe(admin=>{
      this.isAuthenticated = !!admin;
    })
  }

  onLogout() {
    
    this.authService.logout();
    //this.router.navigateByUrl("/");
  }

}
