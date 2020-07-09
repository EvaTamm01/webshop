import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: Item[];
  chosenCategory: string;
  userData: string;

  constructor(private itemService: ItemService, private databaseService: DatabaseService) { }

  ngOnInit(): void {
    
    this.databaseService.fetchItems().subscribe(items => {
      let allItems = items;
      this.items = allItems;
    },
    error => {
      console.log(error);
    }
    );
    
    console.log(localStorage.getItem("dataOfUser"));
    this.userData = localStorage.getItem("dataOfUser");
    if (this.userData) {
      console.log("on olemas");
      
    }else {
      console.log("ei ole olemas");
    }
    
    
  }

}
