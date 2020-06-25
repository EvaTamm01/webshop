import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { ToastService } from 'angular-toastify';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  item: Item;

  constructor(private router: ActivatedRoute,
    private itemService: ItemService,
    private _toastService: ToastService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.item = this.itemService.getItem(params['id'])
    });
    console.log(this.item);
  }

 addToCart() {
    this._toastService.info('Ostukorvi lisatud');
    this.cartService.addItemToCart(this.item);
 }

}
