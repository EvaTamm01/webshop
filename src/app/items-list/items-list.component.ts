import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: {"imgSrc": string, "title": string, 
  "price": string, "category": string}[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    console.log(this.items);
    this.items = this.itemService.getItems();
    console.log(this.items);
  }

}
