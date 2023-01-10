import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MasterComponent } from './components/master/master.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { GetDataService } from '../country/get-data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    MasterComponent
  ],
  providers:[
    GetDataService
  ]
})
export class CoreModule { }
