import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Supply } from 'src/app/models/supply';
import { SupplyService } from 'src/app/services/supply.service';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
  supplies:Supply[]=[];
  constructor(private supplyService:SupplyService,private toasterService:ToastrService) { }

  ngOnInit(): void {
    this.GetAllSupply()
  }

  GetAllSupply(){
    this.supplyService.getAll().subscribe(response=>{
      this.supplies = response.data
    })
  }
  edit(supplyId:number){
    var x:string =""+supplyId
    localStorage.setItem("supplyId",x) 
  }

  delete(supply:Supply){
    this.supplyService.delete(supply).subscribe(response =>{
      this.toasterService.success(response.message,"silindi")
      window.location.reload();
    })
  }


}
