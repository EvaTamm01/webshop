import { Component, OnInit } from '@angular/core';
import { Item } from '../items-list/item.model';
import { ItemService } from '../items-list/item.service';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allItems: Item[];   

  constructor(private itemService: ItemService, private dbService: DatabaseService) { }

  ngOnInit(): void {
  }

  onAddAllItems() {
    this.allItems = this.itemService.getItems();
    this.dbService. saveItems(this.allItems);
  }

}
