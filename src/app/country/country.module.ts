import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CountryDetailsContainerComponent } from './country-details-container/country-details-container.component';
import { CountryListContainerComponent } from './country-list-container/country-list-container.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryDetailsPresentationComponent } from './country-details-container/country-details-presentation/country-details-presentation.component';
import { CountryListPresentationComponent } from './country-list-container/country-list-presentation/country-list-presentation.component';


@NgModule({
  declarations: [
    CountryListContainerComponent,
    CountryDetailsContainerComponent,
    CountryDetailsPresentationComponent,
    CountryListPresentationComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    HttpClientModule
  ]
})
export class CountryModule { }
