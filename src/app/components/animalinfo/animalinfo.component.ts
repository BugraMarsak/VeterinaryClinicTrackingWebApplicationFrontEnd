import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalInformation } from 'src/app/models/animalInformation';
import { Appointment } from 'src/app/models/Appointment';
import { SurgDone } from 'src/app/models/SurgDone';
import { VaccinationCard } from 'src/app/models/vaccinationCard';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { AppointmentService } from 'src/app/services/Appointment.service';
import { SurgDoneService } from 'src/app/services/SurgDone.services';
import { VaccinationcardService } from 'src/app/services/vaccinationcard.service';

@Component({
  selector: 'app-animalinfo',
  templateUrl: './animalinfo.component.html',
  styleUrls: ['./animalinfo.component.css']
})
export class AnimalinfoComponent implements OnInit {

  constructor(private vaccinationCardService:VaccinationcardService,private appointmentService:AppointmentService,private activatedRoute:ActivatedRoute,private animalInformatinService:AnimalInformationService,private surgDoneService:SurgDoneService) { }
  vaccinationCards:VaccinationCard[] = [];
  surgDones:SurgDone[]=[];
  appointments:Appointment[]=[]
  animalName:string;
  animalId:number;
  animalInfo:AnimalInformation
  ngOnInit(): void {
    this.getAnimalId()
  }


  getAnimalId(){
    this.activatedRoute.params.subscribe(params =>{
      this.getById(params["animalId"]);  
      this.getAnimal(params["animalId"]);
      this.animalId = params["animalId"]
      this.getSurgDone(params["animalId"]);
      this.getAppointments(params["animalId"]);
    })
  }

  delete(){
    this.animalInformatinService.delete(this.animalInfo).subscribe(response=>{})
  }
  surCheck(){
    if(this.surgDones.length<=0){
      return false
    }
    else{
      return true
    }
  }
  appCheck(){
    if(this.appointments.length<=0){
      return false
    }
    else{
      return true
    }
  }
  vaccheck(){
    if(this.vaccinationCards.length<=0){
      return false
    }
    else{
      return true
    }
  }

  getAppointments(id:number){
    this.appointmentService.getById(id).subscribe(response=>{
      this.appointments = response.data

    })
      
  }

  getById(id:number){
    
    this.vaccinationCardService.getById(id).subscribe(response=>{
      this.vaccinationCards = response.data
      
    })
  }

  control(){
    console.log()
    if(this.appointments.length<=0){
      return false
    }
    else{
      return true
    }
  }

  getSurgDone(id:number){
    this.surgDoneService.getById(id).subscribe(response=>{
      this.surgDones=response.data
    })
  }

  getAnimal(id:number){
    this.animalInformatinService.getByAnimalId(id).subscribe(response=>{
      this.animalInfo = response.data;
    })
  }

}
