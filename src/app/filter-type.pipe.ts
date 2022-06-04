import { Pipe, PipeTransform } from '@angular/core';
import { IBeer } from './models/beer';


@Pipe({
  name: 'filterPipe'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: IBeer[], type: "small" | "medium"): IBeer[] {
    return value.filter((beer: IBeer) => beer.type === type);
  }

}
