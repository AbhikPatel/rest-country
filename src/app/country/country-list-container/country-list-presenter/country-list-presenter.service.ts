import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class CountryListPresenterService {

  private countryName: Subject<string>;
  public countryName$: Observable<string>;

  private regionData: Subject<any>;
  public regionData$: Observable<any>;

  constructor() {
    this.countryName = new Subject();
    this.countryName$ = new Observable();
    this.countryName$ = this.countryName.asObservable();

    this.regionData = new Subject();
    this.regionData$ = new Observable();
    this.regionData$ = this.regionData.asObservable();
  }

  public getData(data: string) {
    this.countryName.next(data)
  }

  public getFilter(filter: any, countries: any) {
    let filterData = countries.filter((data: any) => data.region === filter);
    this.regionData.next(filterData)
  }
}
