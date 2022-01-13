import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { VaccinationcardService } from 'src/app/services/vaccinationcard.service';

@Component({
  selector: 'app-addvaccinationcard',
  templateUrl: './addvaccinationcard.component.html',
  styleUrls: ['./addvaccinationcard.component.css']
})
export class AddvaccinationcardComponent implements OnInit {

  addForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private vaccinationCardService:VaccinationcardService,private animalInfoService:AnimalInformationService) { }

  ngOnInit(): void {
    this.createAddForm()
  }

  createAddForm(){

    this.addForm= this.formBuilder.group({
      animalId:["",Validators.required],
      vaccinated:["",Validators.required],
      vaccinationName:["",Validators.required],
    })
  }

  add(){
    this.booleanfunction()
    if(this.addForm.valid){
      let vaccModel=Object.assign({},this.addForm.value);
      this.vaccinationCardService.add(vaccModel).subscribe(response=>{
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
}
