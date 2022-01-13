import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { race } from 'rxjs';
import { AnimalKind } from 'src/app/models/animalKind';
import { AnimalRace } from 'src/app/models/animalRace';
import { User } from 'src/app/models/user';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { TokenClaim } from 'src/app/services/tokenclaim.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-updateanimalinfo',
  templateUrl: './updateanimalinfo.component.html',
  styleUrls: ['./updateanimalinfo.component.css']
})
export class UpdateanimalinfoComponent implements OnInit {
  addForm:FormGroup;
  user:User
  phoneNum:string
  generalPhoto:string ="https://user-images.githubusercontent.com/47815793/148645877-6b77d0c8-0a60-4820-9614-1758ac97876e.png"
  kinds:AnimalKind[]=[]
  races:AnimalRace[]=[]
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private activatedRoute:ActivatedRoute,private tokenclaim:TokenClaim,private userService:UserService,private animalInfoService:AnimalInformationService) { }

  ngOnInit(): void {  
    this.test()
    this.createAddForm()
    this.getanimalkinds()
    this.animalinfo()
    
  }
  animalinfo(){
    this.activatedRoute.params.subscribe(params =>{
      
      this.get(params["animalId"])
      
    })
  }
  
  get(id:number){
    this.animalInfoService.getByAnimalId(id).subscribe(response=>{
      this.updatefix(response.data.animalKind)
      this.addForm.controls["userId"].setValue(response.data.userId)
      this.addForm.controls["animalId"].setValue(response.data.animalId)
      this.addForm.controls["animalName"].setValue(response.data.animalName)
      this.addForm.controls["animalKind"].setValue(response.data.animalKind)
      this.addForm.controls["animalRace"].setValue(response.data.animalRace)
      this.addForm.controls["neutered"].setValue(response.data.neutered)
      this.addForm.controls["animalColor"].setValue(response.data.animalColor)
      this.addForm.controls["ownerPhoneNumber"].setValue(response.data.ownerName)
      this.addForm.controls["ownerName"].setValue(response.data.ownerName)
      this.addForm.controls["animalPhoto"].setValue(response.data.animalPhoto)
      this.addForm.controls["gender"].setValue(response.data.gender)
      this.addForm.controls["birthday"].setValue(response.data.birthDay)

    })
  }
  
  createAddForm(){
    this.addForm= this.formBuilder.group({
      userId:["",Validators.required],
      animalId:["",Validators.required],
      animalName:["",Validators.required],
      animalKind:["",Validators.required],
      animalRace:["",Validators.required],
      neutered:["",Validators.required],
      animalColor:["",Validators.required],
      ownerPhoneNumber:["",Validators.required],
      ownerName:["",Validators.required],
      animalPhoto:["",Validators.required],
      gender:["",Validators.required],
      birthday:["",Validators.required]
    })
  }

  test(){
    this.userService.getById(this.tokenclaim.getid()).subscribe(repsonse=>{
     this.phoneNum = repsonse.data.phoneNumber
    })
    
  }

  add(){
    
    if(this.addForm.get("animalPhoto").value ==""){
      this.addForm.controls["animalPhoto"].setValue(this.generalPhoto)
    }
    this.addForm.controls["ownerPhoneNumber"].setValue(this.phoneNum)
    this.booleanfunction()
    
    if(this.addForm.valid){
      let animalModel=Object.assign({},this.addForm.value);
      this.animalInfoService.add(animalModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
      
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }


  }
   getanimalkinds(){
    this.kinds = []
    this.animalInfoService.animalKind().subscribe(response=>{
    this.kinds = response.data
  })
  
  }
  
  booleanfunction(){
    if(this.addForm.get("neutered").value == "true"){
      this.addForm.controls["neutered"].setValue(true)
    }else{
      this.addForm.controls["neutered"].setValue(false)
    } 
  }

  getRaces(){
    this.races =[]
    for(var i=0;this.kinds.length>i;i++){
      if(this.addForm.get("animalKind").value==this.kinds[i].animalKindName){
        this.animalInfoService.animalRace(this.kinds[i].id).subscribe(response=>{
          this.races = response.data
        })
      }
    }
  }

  showRaceSelect(){
    if(this.addForm.get("animalKind").value ==""){
      return false
    }
    else{
      
      return true
    }
  }

  updatefix(str:string){
    for(var i=0;this.kinds.length>i;i++){
      if(str==this.kinds[i].animalKindName){
        this.animalInfoService.animalRace(this.kinds[i].id).subscribe(response=>{
          this.races = response.data
        })
      }
    }
  }

}
