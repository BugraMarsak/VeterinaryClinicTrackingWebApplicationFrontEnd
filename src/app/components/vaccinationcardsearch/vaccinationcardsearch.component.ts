import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccinationcardsearch',
  templateUrl: './vaccinationcardsearch.component.html',
  styleUrls: ['./vaccinationcardsearch.component.css']
})
export class VaccinationcardsearchComponent implements OnInit {
  animalId:number;
  apiurl:string ="/vaccinatincard/"
  result:string
  constructor() { }

  ngOnInit(): void {
  }

  go(){
    console.log(this.animalId)

  }
}
