import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SurgDoneService } from 'src/app/services/SurgDone.services';

@Component({
  selector: 'app-surgdoneaddbyid',
  templateUrl: './surgdoneaddbyid.component.html',
  styleUrls: ['./surgdoneaddbyid.component.css']
})
export class SurgdoneaddbyidComponent implements OnInit {

  addForm:FormGroup;
  hours:string[]=["10","11","12","13","14","15","16","17","18","19"]
  minutes:string[]=["00","10","20","30","40","50"]
  min:number
  nghour:number
  ngDay:Date
  surgday:Date
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private activatedRoute:ActivatedRoute,private surgDoneService:SurgDoneService) { }

  ngOnInit(): void {
    this.createAddForm()
    this.getAnimalId()
  }

  getAnimalId(){
    this.activatedRoute.params.subscribe(params =>{
      this.addForm.controls["animalId"].setValue(params["animalId"])
    })
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
    if(this.addForm.valid){
      let animalModel=Object.assign({},this.addForm.value);
      this.surgDoneService.add(animalModel).subscribe(response=>{
        this.toastrService.success(response.message,"Ba??ar??l??!");
      }); 
      
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }


  }

}
