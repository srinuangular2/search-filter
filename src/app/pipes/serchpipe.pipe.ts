import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serchpipe'
})
export class SerchpipePipe implements PipeTransform {

  transform(items: any[], term: any,searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    //searchText = searchText.toLowerCase();
    return items.filter(function(it){
     // return JSON.stringify(it).toLowerCase().includes(searchText);

      return items[searchText].toString().toLowerCase().includes(term.toLowerCase())
    });
  }




}




