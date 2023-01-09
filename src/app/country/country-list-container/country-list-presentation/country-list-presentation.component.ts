import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryListPresenterService } from '../country-list-presenter/country-list-presenter.service';

@Component({
  selector: 'app-country-list-presentation',
  templateUrl: './country-list-presentation.component.html',
  viewProviders:[CountryListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryListPresentationComponent implements OnInit {
  
  @Input() public set countries(v : any) {
    this._countries = v;
  }

  public get countries() : any {
    return this._countries;
  }
  
  private _countries : any;

  @Output() public emitCountry:EventEmitter<string>;

  constructor(
    private _service:CountryListPresenterService
  ) { 
    this.emitCountry = new EventEmitter();
  }

  ngOnInit(): void {
    this._service.countryName$.subscribe((data:string) => this.emitCountry.emit(data))
  }

  public onCard(data:string){
    this._service.getData(data)
  }
}
