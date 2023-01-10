import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    return value.filter((data:any) => data?.name?.toLowerCase()?.indexOf(searchTerm.toLowerCase()) > -1)
  }

}
