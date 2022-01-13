import { Component, OnInit } from '@angular/core';
import { AnimalInformation } from 'src/app/models/animalInformation';
import { User } from 'src/app/models/user';
import { AnimalInformationService } from 'src/app/services/animal-information.service';
import { TokenClaim } from 'src/app/services/tokenclaim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  id:number;
  user:User;
  animals:AnimalInformation []=[];
  constructor(private userService:UserService,private tokenClaim:TokenClaim,private animalInformationService:AnimalInformationService) { }

  ngOnInit(): void {
    this.getid()
    this.delay()

  }

  getid(){
    var x = this.tokenClaim.getid()
    this.id = x
  }

  delay(){
    this.getUser()
    this.getAnimals()
  }
  getUser(){
    this.userService.getById(this.id).subscribe(response=>{
      
      this.user = response.data 
      
    })
  }


  getAnimals(){
    this.animalInformationService.getByUserId(this.id).subscribe(response=>{
      this.animals = response.data
      
    })
  }

}
