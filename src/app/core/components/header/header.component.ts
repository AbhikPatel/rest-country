import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/country/get-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public toggleDark:boolean = false;

  constructor(
    private _service:GetDataService
  ) { 
    this._service.darkMode.subscribe((data) => this.toggleDark = data)
  }

  ngOnInit(): void {
  }

  public onDark(){
    this.toggleDark ? this._service.darkMode.next(false) : this._service.darkMode.next(true);
  }

}
