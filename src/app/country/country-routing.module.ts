import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsContainerComponent } from './country-details-container/country-details-container.component';
import { CountryListContainerComponent } from './country-list-container/country-list-container.component';

const routes: Routes = [
  {path:'', component:CountryListContainerComponent},
  {path:'details', component:CountryDetailsContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
