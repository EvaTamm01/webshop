import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Item } from '../items-list/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Item[];
  sumOfCart: number = 1000;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getItemsFromService();
    //this.cartItems = this.cartService.getCartItems();
  }

  onRemoveFromCart(i: number): void {
    this.cartService.deleteFromCart(i);
    this.getItemsFromService();
  }

  getItemsFromService() {
    let itemsFromCart = this.cartService.getCartItems();
    this.cartItems = itemsFromCart.map(item => ({...item, price: item.price.split("$")[2] ? item.price.split("$")[2]
    : item.price.split("$")[1]}));
    this.sumOfCart = this.getItemCartSum();
  }

  getItemCartSum(): number {
    let sum = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      sum += parseFloat(this.cartItems[i].price);
    }
    return sum;
  }
  
}
