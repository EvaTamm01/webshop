import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.model';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(items: Item[]): Item[] {
    let uniqueItems: Item[] = [];

    items.filter(function(item, index, array) {
      if(array.map(item => item.category).indexOf(item.category) == index) {
        return uniqueItems.push(item);
      }
    })
    return uniqueItems;
  }

}
