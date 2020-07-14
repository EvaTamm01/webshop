import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Item } from '../items-list/item.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  itemsChanged = new Subject<Item[]>();
    error = new Subject<string>();;
    items: Item[] = [];

    constructor(private http: HttpClient){}

    // updateItem(index: string, updatedProject: Item) {
    //     this.projects[index] = updatedProject;
    //     this.projectsChanged.next(this.projects.slice());
    //     this.saveProjects(this.projects);
    // }

    // getProjects() {
    //   return this.projects.slice();
    // }

    // getProject(index: string) {
    //     this.fetchProjects();
    //     return this.projects.find(project => project.firebaseId === index);
    // }

    uploadItem(newItem: Item) {
        
        console.log(newItem);
        this.http.post('https://evakewebshop.firebaseio.com/items.json', newItem).subscribe(
        responseData => {
          console.log("ITEM LÄKS ÜLES");
        }),
        error => {
          console.log(typeof error);
          
            this.error.next(error.message);
        }
        //end
    }

    fetchItems() {
        if (false) {
          // const itemsArray: Item[] = JSON.parse(localStorage.getItem("items"));
        
          // console.log("VÕTSIN LOCAL STORAGE'ist");
          // this.items = itemsArray;
          // return itemsArray;

        } else {

          return this.http.get<{ [key: string]: Item }>('https://evakewebshop.firebaseio.com/items.json')
            
            .pipe(map(responseData=> {
              
              const itemsArray: Item[] = [];
              for (const key in responseData) {
                if(responseData.hasOwnProperty(key)) {
                  itemsArray.push({ ...responseData[key], firebaseId: key})
                }
              }
              this.items = itemsArray;
              localStorage.setItem("items", JSON.stringify(itemsArray));
              console.log("PANIN LOCAL STORAGE'isse");
              return itemsArray;
            }));


        }



        
    }

    saveItems(items: Item[]) {
      console.log(items);
      this.http.put(
          'https://evakewebshop.firebaseio.com/items.json',
          items)
      .subscribe(response => {
        console.log("Salvestatud");
        console.log(response);
      });
      this.items = this.items;
    }
}
