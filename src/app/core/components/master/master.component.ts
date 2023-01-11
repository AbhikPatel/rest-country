import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/country/get-data.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {

  public toggleDark:boolean;

  constructor(
    private _service:GetDataService
  ) {
    this.toggleDark = false 
  }
  
  ngOnInit(): void {
    this._service.darkMode.subscribe((data) => this.toggleDark = data)
  }

}
