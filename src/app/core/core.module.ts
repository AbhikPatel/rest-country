import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MasterComponent } from './components/master/master.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MasterComponent
  ]
})
export class CoreModule { }
