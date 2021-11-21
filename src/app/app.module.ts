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
import { CompletedComponent } from './components/completed/completed.component';
import { FailureComponent } from './components/failure/failure.component';
import { VaccinationcardsearchComponent } from './components/vaccinationcardsearch/vaccinationcardsearch.component';

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
    CompletedComponent,
    FailureComponent,
    VaccinationcardsearchComponent
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
