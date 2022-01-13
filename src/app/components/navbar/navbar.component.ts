import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token';
import { TokenClaim } from 'src/app/services/tokenclaim.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:Token;
  x:string[]=[]
  y:string[]=[]
  constructor(private tokenClaim:TokenClaim) { }

  ngOnInit(): void {
  }


  getname(){
    return this.tokenClaim.getName()
  }

  
  checklog():boolean{
    if(localStorage.getItem("token")){
      
      return true
    }
    return false
  }

  checkauth():boolean{
    this.x = []
    this.x = this.tokenClaim.claims();
    if(this.tokenClaim.claims() != undefined){
    for(let i = 0; i <this.x.length ; i++){
      if( this.x[i] == "Admin"){
        
        return true;
      }
    }}
    return false;
  }
  checkauth2(){

    if(this.tokenClaim.claims() == undefined){return true}
    return false
  }

  exit(){
    localStorage.removeItem("token")
  }

}
