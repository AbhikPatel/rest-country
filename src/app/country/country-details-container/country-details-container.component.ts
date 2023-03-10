import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-country-details-container',
  templateUrl: './country-details-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailsContainerComponent implements OnInit {

  public getCountryData$: Observable<any>;
  public getDarkMode$: Observable<boolean>;
  
  constructor(
    private _service: GetDataService
  ) {
    this.getCountryData$ = new Observable();
    this.getDarkMode$ = new Observable();
  }

  ngOnInit(): void {
    this.getCountryData$ = this._service.getCountry();
    this.getDarkMode$ = this._service.darkMode.asObservable();
  }
}
