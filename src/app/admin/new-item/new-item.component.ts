import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { Item } from 'src/app/items-list/item.model';
import { ItemService } from 'src/app/items-list/item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor(private itemService: ItemService,
    private _toastService: ToastService) { }

  ngOnInit(): void {
  }

  onNewItem(newItemForm: NgForm) {
    newItemForm.reset();
    this._toastService.success("Edukalt uus toode lisatud");
    //this.itemService.addItem(new Item(
      //newItemForm.value.imgSrc, 
      //newItemForm.value.title, 
      //newItemForm.value.price, 
      //newItemForm.value.category));
  }
}
