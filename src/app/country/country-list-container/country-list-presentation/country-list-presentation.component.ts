import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryListPresenterService } from '../country-list-presenter/country-list-presenter.service';

@Component({
  selector: 'app-country-list-presentation',
  templateUrl: './country-list-presentation.component.html',
  viewProviders: [CountryListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListPresentationComponent implements OnInit {

  @Input() public set countries(v: any) {
    this._countries = v;
    this.updatedData = v;
  }

  public get countries(): any {
    return this._countries;
  }

  @Output() public emitCountry: EventEmitter<string>;

  private _countries: any;
  public updatedData: any;
  public searchText: string;
  public selectDropDown: boolean;
  public regionName: any[];
  public placeholder: string;

  constructor(
    private _service: CountryListPresenterService
  ) {
    this.emitCountry = new EventEmitter();
    this.searchText = '';
    this.selectDropDown = false
    this.regionName = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All'];
    this.placeholder = 'Filter by Region'
  }

  ngOnInit(): void {
    this._service.countryName$.subscribe((data: string) => this.emitCountry.emit(data));
    this._service.regionData$.subscribe((data) => this.updatedData = data);
  }

  public onCard(data: string) {
    this._service.getData(data)
  }

  public onOpen() {
    this.selectDropDown ? this.selectDropDown = false : this.selectDropDown = true;
  }

  public onRegion(data: any) {
    if (data === 'All') {
      this.updatedData = this._countries;
      this.placeholder = 'Filter by Region';
    }
    else {
      this._service.getFilter(data, this._countries)
      this.placeholder = data;
    }
    this.selectDropDown = false;
    this.searchText = '';
  }
}
