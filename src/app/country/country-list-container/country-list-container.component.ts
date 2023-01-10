import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './country-list-container.component.html',
  viewProviders:[GetDataService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryListContainerComponent implements OnInit {

  public getData$:Observable<any>;

  constructor(
    private _service:GetDataService,
    private _route:Router
  ) { 
    this.getData$ = new Observable();
  }

  ngOnInit(): void {
    this.getData$ = this._service.getCountries()
  }

  public emitCountry(data:string){
    this._route.navigateByUrl('/country/country-details')
  }

}
