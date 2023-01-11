import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryDetailsContainerComponent } from './country-details-container/country-details-container.component';
import { CountryDetailsPresentationComponent } from './country-details-container/country-details-presentation/country-details-presentation.component';
import { CountryListContainerComponent } from './country-list-container/country-list-container.component';
import { CountryListPresentationComponent } from './country-list-container/country-list-presentation/country-list-presentation.component';
import { CountryRoutingModule } from './country-routing.module';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    CountryListContainerComponent,
    CountryDetailsContainerComponent,
    CountryDetailsPresentationComponent,
    CountryListPresentationComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CountryModule { }
