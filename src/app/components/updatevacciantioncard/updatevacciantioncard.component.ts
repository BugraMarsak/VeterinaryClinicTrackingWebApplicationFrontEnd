import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VaccinationCard } from 'src/app/models/vaccinationCard';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { VaccinationcardService } from 'src/app/services/vaccinationcard.service';

@Component({
  selector: 'app-updatevacciantioncard',
  templateUrl: './updatevacciantioncard.component.html',
  styleUrls: ['./updatevacciantioncard.component.css']
})
export class UpdatevacciantioncardComponent implements OnInit {
  addForm:FormGroup;
  vacCard:VaccinationCard
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private activatedRoute:ActivatedRoute,private vaccinationCardService:VaccinationcardService,private animalInfoService:AnimalInformationService) { }

  ngOnInit(): void {
    this.createAddForm()
    this.getAnimalId()
  }

  getAnimalId(){
    this.activatedRoute.params.subscribe(params =>{
      
      this.get(params["vaccinationCardId"])
      
    })
  }
  createAddForm(){

    this.addForm= this.formBuilder.group({
      vaccinationCardId:["",Validators.required],
      animalId:["",Validators.required],
      vaccinated:["",Validators.required],
      vaccinationName:["",Validators.required],
    })
  }

  update(){
    this.booleanfunction()
    if(this.addForm.valid){
      let vaccModel=Object.assign({},this.addForm.value);
      this.vaccinationCardService.update(vaccModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
      
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }

  }
  booleanfunction(){
    if(this.addForm.get("vaccinated").value == "true"){
      this.addForm.controls["vaccinated"].setValue(true)
    }else{
      this.addForm.controls["vaccinated"].setValue(false)
    } 
  }
  get(id:number){
    this.vaccinationCardService.getByVacId(id).subscribe(response=>{
      this.addForm.controls["vaccinationCardId"].setValue(response.data.vaccinationCardId)
      this.addForm.controls["animalId"].setValue(response.data.animalId)
      this.addForm.controls["vaccinated"].setValue(response.data.vaccinated)
      this.addForm.controls["vaccinationName"].setValue(response.data.vaccinationName)
      
    })
  }


}
