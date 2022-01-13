import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SupplyComponent } from './components/supply/supply.component';
import { AddSupplyComponent } from './components/add-supply/add-supply.component';
import { ContactComponent } from './components/contact/contact.component';
import { VaccinationcardComponent } from './components/vaccinationcard/vaccinationcard.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { VaccinationcardsearchComponent } from './components/vaccinationcardsearch/vaccinationcardsearch.component';
import { SpecialnavComponent } from './components/specialnav/specialnav.component';
import { RegisterComponent } from './components/register/register.component';
import { AppointmentlistComponent } from './components/appointmentlist/appointmentlist.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { AnimalinfoComponent } from './components/animalinfo/animalinfo.component';
import { AddanimalComponent } from './components/addanimal/addanimal.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { SupplyeditComponent } from './components/supplyedit/supplyedit.component';
import { SurgdonesearchComponent } from './components/surgdonesearch/surgdonesearch.component';
import { SurgdoneComponent } from './components/surgdone/surgdone.component';
import { AddvaccinationcardComponent } from './components/addvaccinationcard/addvaccinationcard.component';
import { AddsurgdoneComponent } from './components/addsurgdone/addsurgdone.component';
import { VaccinationaddbyidComponent } from './components/vaccinationaddbyid/vaccinationaddbyid.component';
import { SurgdoneaddbyidComponent } from './components/surgdoneaddbyid/surgdoneaddbyid.component';
import { UpdatevacciantioncardComponent } from './components/updatevacciantioncard/updatevacciantioncard.component';
import { UpdateanimalinfoComponent } from './components/updateanimalinfo/updateanimalinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AppointmentComponent,
    SupplyComponent,
    AddSupplyComponent,
    ContactComponent,
    VaccinationcardComponent,
    PersonnelComponent,
    AboutComponent,
    HomeComponent,
    VaccinationcardsearchComponent,
    SpecialnavComponent,
    RegisterComponent,
    AppointmentlistComponent,
    UserpageComponent,
    AnimalinfoComponent,
    AddanimalComponent,
    UpdateuserComponent,
    SupplyeditComponent,
    SurgdonesearchComponent,
    SurgdoneComponent,
    AddvaccinationcardComponent,
    AddsurgdoneComponent,
    VaccinationaddbyidComponent,
    SurgdoneaddbyidComponent,
    UpdatevacciantioncardComponent,
    UpdateanimalinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
