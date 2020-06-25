import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    console.log(this.items);
    this.items = this.itemService.getItems();
    console.log(this.items);

    let i;
    for (i=0; i<this.items.length; i++) {
      console.log(i);
    }
  }

}
