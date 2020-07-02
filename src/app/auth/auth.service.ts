import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [];

  constructor() { }

  saveNewUser(user: User): void {
    this.users.push(user);
  }

  getAllUsers(): User[] {
    return this.users.slice();
  }
}
