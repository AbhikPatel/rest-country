import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MasterComponent } from './components/master/master.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
  
    MasterComponent,
       HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
