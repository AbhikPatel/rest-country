import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './country-list-container.component.html',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryListContainerComponent implements OnInit {

  public getData$:Observable<any>;
  public getDarkMode$:Observable<boolean>;

  constructor(
    private _service:GetDataService,
    private _route:Router
  ) { 
    this.getData$ = new Observable();
    this.getDarkMode$ = new Observable();
  }

  ngOnInit(): void {
    this.getData$ = this._service.getCountries();
    this.getDarkMode$ = this._service.darkMode.asObservable();
  }

  public emitCountry(data:string){
    this._service.getCountryName = data;
    this._route.navigateByUrl('/country-details');
  }

}
