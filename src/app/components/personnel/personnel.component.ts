import { Component, OnInit } from '@angular/core';
import { Personnel } from 'src/app/models/personnel';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  constructor(private personnelService:PersonnelService) { }
  personnels:Personnel[]=[];
  ngOnInit(): void {
    this.getAllPersonnel();
  }

  getAllPersonnel(){
    this.personnelService.getAll().subscribe(response=>{
      this.personnels = response.data

    })
  }
}
