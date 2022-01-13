import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SurgDone } from 'src/app/models/SurgDone';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { SurgDoneService } from 'src/app/services/SurgDone.services';

@Component({
  selector: 'app-surgdone',
  templateUrl: './surgdone.component.html',
  styleUrls: ['./surgdone.component.css']
})
export class SurgdoneComponent implements OnInit {
  constructor(private surgDoneService:SurgDoneService,private toasterService:ToastrService,private activatedRoute:ActivatedRoute,private animalInformatinService:AnimalInformationService) { }
  surgDones:SurgDone[] = [];
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
  delete(vaccard:SurgDone){
    this.surgDoneService.delete(vaccard).subscribe(response =>{
      this.toasterService.success(response.message,"silindi")
      window.location.reload();
    })
  }

  getById(id:number){
    
    this.surgDoneService.getById(id).subscribe(response=>{
      this.surgDones = response.data
      console.log(response.data)
     
    })
  }

  getAnimalName(id:number){
    this.animalInformatinService.getByAnimalId(id).subscribe(response=>{
      this.animalName = response.data.animalName;
    })
  }

}
