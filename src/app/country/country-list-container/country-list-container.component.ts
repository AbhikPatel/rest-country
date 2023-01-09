import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './country-list-container.component.html',
  viewProviders:[GetDataService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryListContainerComponent implements OnInit {

  constructor(
    private _service:GetDataService
  ) { }

  ngOnInit(): void {
  }

}
