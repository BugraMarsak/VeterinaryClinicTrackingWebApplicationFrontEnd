import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { AppointmentService } from 'src/app/services/Appointment.service';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit {

  constructor(private appointmentService:AppointmentService,private animalInfoService:AnimalInformationService) { }
  appointmentTime:string
  appointments:Appointment[]=[]
  name:string
  text:boolean
  ngOnInit(): void {

  }

  getAppointmentByTime(){
    this.appointments = []
    this.text = true
    this.appointmentService.getByTime(this.appointmentTime).subscribe(response=>{
      this.appointments=response.data
    })
  }

  test(id:number){
    this.animalInfoService.getByAnimalId(id).subscribe(response=>{
     
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

  dateorregular(){
    if(this.appointmentTime == undefined){
      return true
    }
    else{
      return false
    }
  }
}
