import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CountryDetailsContainerComponent } from './country-details-container/country-details-container.component';
import { CountryListContainerComponent } from './country-list-container/country-list-container.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryDetailsPresentationComponent } from './country-details-container/country-details-presentation/country-details-presentation.component';
import { CountryListPresentationComponent } from './country-list-container/country-list-presentation/country-list-presentation.component';
import { GetDataService } from './get-data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  ],
  providers:[
    GetDataService
  ]
})
export class CountryModule { }
