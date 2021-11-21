import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddSupplyComponent } from './components/add-supply/add-supply.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { SupplyComponent } from './components/supply/supply.component';
import { VaccinationcardComponent } from './components/vaccinationcard/vaccinationcard.component';
import { VaccinationcardsearchComponent } from './components/vaccinationcardsearch/vaccinationcardsearch.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"Appointment",component:AppointmentComponent},
  {path:"supply",component:SupplyComponent},
  {path:"supply-add",component:AddSupplyComponent},
  {path:"contact",component:ContactComponent},
  {path:"vaccinatincard",component:VaccinationcardsearchComponent},
  {path:"personnel",component:PersonnelComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"vaccinatincard/:animalId",component:VaccinationcardComponent},
  {path:"vaccinatincard",component:VaccinationcardComponent},
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
