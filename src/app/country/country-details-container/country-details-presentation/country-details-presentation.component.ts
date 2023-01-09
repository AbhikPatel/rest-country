import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountryDetailsPresenterService } from '../country-details-presenter/country-details-presenter.service';

@Component({
  selector: 'app-country-details-presentation',
  templateUrl: './country-details-presentation.component.html',
  viewProviders:[CountryDetailsPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryDetailsPresentationComponent implements OnInit {

  constructor(
    private _service:CountryDetailsPresenterService
  ) { }

  ngOnInit(): void {
  }

}
