import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { race } from 'rxjs';
import { AnimalKind } from 'src/app/models/animalKind';
import { AnimalRace } from 'src/app/models/animalRace';
import { User } from 'src/app/models/user';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { TokenClaim } from 'src/app/services/tokenclaim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.css']
})
export class AddanimalComponent implements OnInit {
  addForm:FormGroup;
  user:User
  phoneNum:string
  generalPhoto:string ="https://user-images.githubusercontent.com/47815793/148645877-6b77d0c8-0a60-4820-9614-1758ac97876e.png"
  kinds:AnimalKind[]=[]
  races:AnimalRace[]=[]
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private tokenclaim:TokenClaim,private userService:UserService,private animalInfoService:AnimalInformationService) { }

  ngOnInit(): void {  
    this.test()
    this.createAddForm()
    this.getanimalkinds()
   
    
    
  }
  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("I promise to return after one second!");
      }, 2000);
    });
  }
  async asyncMethod() {
  const value = await this.waitForOneSecond();
  
  }
  
  createAddForm(){
    var _ownerName:string =this.tokenclaim.getName()
    var id:number = this.tokenclaim.getid()
    this.addForm= this.formBuilder.group({
      userId:[id,Validators.required],
      animalId:["",Validators.required],
      animalName:["",Validators.required],
      animalKind:["",Validators.required],
      animalRace:["",Validators.required],
      neutered:["",Validators.required],
      animalColor:["",Validators.required],
      ownerPhoneNumber:["",Validators.required],
      ownerName:[_ownerName,Validators.required],
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

}
