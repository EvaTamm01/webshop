import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  item = {"imgSrc": "www.development.ee", "title": "Laptop", 
  "price": "300EUR", "category": "laptop"}

  constructor() { }

  getItem(): {"imgSrc": string, "title": string, 
  "price": string, "category": string} {
    return this.item;
  }

}
