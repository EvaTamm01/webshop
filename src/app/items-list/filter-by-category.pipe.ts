import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.model';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(items: Item[], category: string): Item[] {
    if(category == null) {
      return items;
    }
    else {
    return items.filter(item => item.category.indexOf(category) !== -1);
  }
  }

}
