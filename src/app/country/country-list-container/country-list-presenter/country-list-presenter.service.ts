import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class CountryListPresenterService {

  private countryName:Subject<string>;
  public countryName$:Observable<string>;

  constructor() { 
    this.countryName = new Subject();
    this.countryName$ = new Observable();
    this.countryName$ = this.countryName.asObservable();
  }

  public getData(data:string){
    this.countryName.next(data)
  }
}
