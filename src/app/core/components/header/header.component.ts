import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/country/get-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(
    private _service:GetDataService
  ) { }

  ngOnInit(): void {
  }

  public onDark(){
  }

}
