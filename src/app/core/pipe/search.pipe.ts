
import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../interfaces/allproduct';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:product[], term:string): product[] {
    return products.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
