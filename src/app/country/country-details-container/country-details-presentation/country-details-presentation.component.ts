import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-details-presentation',
  templateUrl: './country-details-presentation.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryDetailsPresentationComponent implements OnInit {

  @Input() public set toggleMode(v: any) {
    this._toggleMode = v;
  }

  public get toggleMode(): any {
    return this._toggleMode;
  }

  @Input() public set country(v: any[]) {
    this._country = v;
  }

  public get country(): any[] {
    return this._country;
  }

  private _toggleMode: boolean;
  private _country: any[];
  public countryDetails:any;

  constructor() {
    this._country = [];
    this._toggleMode = false;
  }

  ngOnInit(): void {
    
  }

}
