import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SurgDoneService } from 'src/app/services/SurgDone.services';

@Component({
  selector: 'app-addsurgdone',
  templateUrl: './addsurgdone.component.html',
  styleUrls: ['./addsurgdone.component.css']
})
export class AddsurgdoneComponent implements OnInit {
  addForm:FormGroup;
  hours:string[]=["10","11","12","13","14","15","16","17","18","19"]
  minutes:string[]=["00","10","20","30","40","50"]
  min:number
  nghour:number
  ngDay:Date
  surgday:Date
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private surgDoneService:SurgDoneService) { }

  ngOnInit(): void {
    this.createAddForm()
  }

  createAddForm(){

    this.addForm= this.formBuilder.group({
      surgTime:["",Validators.required],
      surgName:["",Validators.required],
      docName:["",Validators.required],
      animalId:["",Validators.required],
    })
  }
  check(){
    if(this.ngDay==undefined){
      return false
    }
    return true
  }
  check2(){
    if(this.nghour==undefined){
      return false
    }
    return true
  }

  minset(){
    var newDate:Date =new Date(this.surgday)
    newDate.setMinutes(this.min)
    this.surgday = newDate
    console.log(this.surgday)
    
  }
  hourset(){

    
    var newDate:Date =new Date(this.ngDay)
    newDate.setHours(+this.nghour+3)
    this.surgday = newDate
    console.log(this.surgday)
    
  }
  add(){  

    this.addForm.controls["surgTime"].setValue(this.surgday)
    console.log(this.addForm)
    console.log()
    console.log(this.nghour ==undefined)
    if(this.addForm.valid){
      let animalModel=Object.assign({},this.addForm.value);
      this.surgDoneService.add(animalModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
      
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }


  }

}
