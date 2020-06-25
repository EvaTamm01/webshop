import { Injectable } from '@angular/core';
import { Item } from '../items-list/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Item[] = [];

  constructor() { }

  addItemToCart(item: Item): void{
    this.cartItems.push(item);
  }

  getCartItems(): Item[] {
    return this.cartItems.slice();
  }

  deleteFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }
}
