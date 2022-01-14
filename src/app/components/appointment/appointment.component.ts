import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AnimalInformation } from 'src/app/models/animalInformation';
import { AppointmentTypes } from 'src/app/models/AppointmentTypes';
import { Personnel } from 'src/app/models/personnel';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { AppointmentService } from 'src/app/services/Appointment.service';
import { AppointmentTypesService } from 'src/app/services/appointmentTypes.service';
import { PersonnelService } from 'src/app/services/personnel.service';
import { TokenClaim } from 'src/app/services/tokenclaim.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentTypes:AppointmentTypes[];
  appointmentForm:FormGroup;
  animals:AnimalInformation[]=[]
  personnels:Personnel[]=[];
  test:number
  day:string
  min:number
  nhours:number[]=[10,11,12,13,14,15,16,17,18,19]
  hours:number[]=[]
  minutes:number[]=[0,20,40]
  constructor(private appointmentTypeService:AppointmentTypesService,private personnelService:PersonnelService,private formBuilder:FormBuilder,private toastrService:ToastrService,private tokenclaim:TokenClaim,private animalInfoService:AnimalInformationService,private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.getanimals();
    this.getpersonals();
    this.getTypes();
    this.createaddForm()
  }
  ds(){
    this.hours =[]
    let date:string = this.appointmentForm.get("appointmentTime").value
    let i:number
    for (let index = 0; index < this.nhours.length; index++) {
      this.appointmentService.getCount(date,this.nhours[index]).subscribe(response=>{

        
        if (response.data<5){

          this.hours[this.hours.length]=this.nhours[index]
          this.hours=this.hours.sort()
        }
      })      
    }
  }
  getTypes(){
    this.appointmentTypeService.getAll().subscribe(response=>{
      this.appointmentTypes = response.data
    })
  }
  createaddForm(){
    this.appointmentForm= this.formBuilder.group({
      userId:[this.tokenclaim.getid(),Validators.required],
      animalId:["",Validators.required],
      appointmentTime:["",Validators.required],
      appointmentType:["",Validators.required],
    })
  }


  add(){
    var newDate:Date =new Date(this.appointmentForm.get("appointmentTime").value) 
    var newhour:number= +this.test+3
    newDate.setHours(newhour)
    newDate.setMinutes(this.min)
    this.appointmentForm.controls["appointmentTime"].setValue(newDate)
    if(this.appointmentForm.valid && this.test != 0 ){
      console.log(this.appointmentForm)
      let appModel=Object.assign({},this.appointmentForm.value);
      this.appointmentService.add(appModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    } 
  }

  check(){
    if((this.appointmentForm.get("appointmentTime").value =="")){
      return false
    }
    else
    {
      return true
    }
  }

  check2(){
    if((this.test == undefined)){
      return false
    }
    else
    {
      return true
    }
  }
  
  getanimals(){
    this.animalInfoService.getByUserId(this.tokenclaim.getid()).subscribe(response=>{
      this.animals = response.data
    })
  }
  getpersonals(){
    this.personnelService.getAll().subscribe(response=>{
      this.personnels = response.data
    })
  }  
}

