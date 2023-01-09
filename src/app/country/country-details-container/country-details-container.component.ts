import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-country-details-container',
  templateUrl: './country-details-container.component.html',
  viewProviders:[GetDataService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryDetailsContainerComponent implements OnInit {

  public getCountryData$:Observable<any>;

  constructor(
    private _service:GetDataService
  ) { 
    this.getCountryData$ = new Observable();
  }

  ngOnInit(): void {
    this._service.countryName.asObservable().subscribe((data) => console.log(data))
  }

}
