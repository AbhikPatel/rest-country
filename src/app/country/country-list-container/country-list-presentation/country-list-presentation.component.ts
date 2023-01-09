import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountryListPresenterService } from '../country-list-presenter/country-list-presenter.service';

@Component({
  selector: 'app-country-list-presentation',
  templateUrl: './country-list-presentation.component.html',
  viewProviders:[CountryListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryListPresentationComponent implements OnInit {

  constructor(
    private _service:CountryListPresenterService
  ) { }

  ngOnInit(): void {
  }

}
