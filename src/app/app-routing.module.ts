import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddSupplyComponent } from './components/add-supply/add-supply.component';
import { AddanimalComponent } from './components/addanimal/addanimal.component';
import { AddsurgdoneComponent } from './components/addsurgdone/addsurgdone.component';
import { AddvaccinationcardComponent } from './components/addvaccinationcard/addvaccinationcard.component';
import { AnimalinfoComponent } from './components/animalinfo/animalinfo.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentlistComponent } from './components/appointmentlist/appointmentlist.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { RegisterComponent } from './components/register/register.component';
import { SupplyComponent } from './components/supply/supply.component';
import { SupplyeditComponent } from './components/supplyedit/supplyedit.component';
import { SurgdoneComponent } from './components/surgdone/surgdone.component';
import { SurgdoneaddbyidComponent } from './components/surgdoneaddbyid/surgdoneaddbyid.component';
import { SurgdonesearchComponent } from './components/surgdonesearch/surgdonesearch.component';
import { UpdateanimalinfoComponent } from './components/updateanimalinfo/updateanimalinfo.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UpdatevacciantioncardComponent } from './components/updatevacciantioncard/updatevacciantioncard.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { VaccinationaddbyidComponent } from './components/vaccinationaddbyid/vaccinationaddbyid.component';
import { VaccinationcardComponent } from './components/vaccinationcard/vaccinationcard.component';
import { VaccinationcardsearchComponent } from './components/vaccinationcardsearch/vaccinationcardsearch.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"Appointment",component:AppointmentComponent, canActivate:[LoginGuard]},
  {path:"supply",component:SupplyComponent, canActivate:[LoginGuard]},
  {path:"supply-add",component:AddSupplyComponent, canActivate:[LoginGuard]},
  {path:"supply/edit",component:SupplyeditComponent, canActivate:[LoginGuard]},
  {path:"surgeries",component:SurgdonesearchComponent, canActivate:[LoginGuard]},
  {path:"surgeries/:animalId",component:SurgdoneComponent, canActivate:[LoginGuard]},
  {path:"add/surgeries",component:AddsurgdoneComponent, canActivate:[LoginGuard]},
  {path:"add/surgeries/:animalId",component:SurgdoneaddbyidComponent, canActivate:[LoginGuard]},
  {path:"contact",component:ContactComponent},
  {path:"vaccinatincard",component:VaccinationcardsearchComponent, canActivate:[LoginGuard]},
  {path:"personnel",component:PersonnelComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"edit/vaccinatincard/:vaccinationCardId",component:UpdatevacciantioncardComponent, canActivate:[LoginGuard]},
  {path:"vaccinatincard/:animalId",component:VaccinationcardComponent, canActivate:[LoginGuard]},
  {path:"add/vaccinatincard",component:AddvaccinationcardComponent, canActivate:[LoginGuard]},
  {path:"add/vaccinatincard/:animalId",component:VaccinationaddbyidComponent, canActivate:[LoginGuard]},
  {path:"sign-up",component:RegisterComponent},
  {path:"user",component:UserpageComponent, canActivate:[LoginGuard]},
  {path:"applist",component:AppointmentlistComponent, canActivate:[LoginGuard]},
  {path:"animalinfo/:animalId",component:AnimalinfoComponent, canActivate:[LoginGuard]},
  {path:"update/animalinfo/:animalId",component:UpdateanimalinfoComponent, canActivate:[LoginGuard]},
  {path:"user/addanimalinfo",component:AddanimalComponent, canActivate:[LoginGuard]},
  {path:"user/edit",component:UpdateuserComponent, canActivate:[LoginGuard]},
   
  
  
  
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
