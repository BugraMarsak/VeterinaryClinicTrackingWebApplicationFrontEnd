import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnimalInformation } from 'src/app/models/animalInformation';
import { VaccinationCard } from 'src/app/models/vaccinationCard';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { VaccinationcardService } from 'src/app/services/vaccinationcard.service';

@Component({
  selector: 'app-vaccinationcard',
  templateUrl: './vaccinationcard.component.html',
  styleUrls: ['./vaccinationcard.component.css']
})
export class VaccinationcardComponent implements OnInit {

  constructor(private vaccinationCardService:VaccinationcardService,private toasterService:ToastrService,private activatedRoute:ActivatedRoute,private animalInformatinService:AnimalInformationService) { }
  vaccinationCards:VaccinationCard[] = [];
  animalName:string;
  animalId:number;
  ngOnInit(): void {
    this.getAnimalId()
  }

  getAnimalId(){
    this.activatedRoute.params.subscribe(params =>{
      this.getById(params["animalId"]);  
      this.getAnimalName(params["animalId"]);
      this.animalId = params["animalId"]
    })
  }
  delete(vaccard:VaccinationCard){
    this.vaccinationCardService.delete(vaccard).subscribe(response =>{
      this.toasterService.success(response.message,"silindi")
      window.location.reload();
    })
  }
  getById(id:number){
    
    this.vaccinationCardService.getById(id).subscribe(response=>{
      this.vaccinationCards = response.data
     
    })
  }

  getAnimalName(id:number){
    this.animalInformatinService.getByAnimalId(id).subscribe(response=>{
      this.animalName = response.data.animalName;
    })
    
  }


}
