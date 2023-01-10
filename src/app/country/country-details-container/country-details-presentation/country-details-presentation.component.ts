import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CountryDetailsPresenterService } from '../country-details-presenter/country-details-presenter.service';

@Component({
  selector: 'app-country-details-presentation',
  templateUrl: './country-details-presentation.component.html',
  viewProviders:[CountryDetailsPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryDetailsPresentationComponent implements OnInit {
  
  @Input() public set country(v : any[]) {
    this._country = v;
  }

  public get country() : any[] {
    return this._country;
  }
  
  private _country : any[];

  constructor(
    private _service:CountryDetailsPresenterService
  ) { 
    this._country = [];
  }

  ngOnInit(): void {
  }

}
