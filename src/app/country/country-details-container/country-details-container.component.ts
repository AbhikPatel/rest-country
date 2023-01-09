import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-country-details-container',
  templateUrl: './country-details-container.component.html',
  viewProviders:[GetDataService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryDetailsContainerComponent implements OnInit {

  constructor(
    private _service:GetDataService
  ) { }

  ngOnInit(): void {
  }

}
