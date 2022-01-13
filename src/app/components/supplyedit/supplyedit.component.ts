import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Supply } from 'src/app/models/supply';
import { SupplyService } from 'src/app/services/supply.service';
import { TokenClaim } from 'src/app/services/tokenclaim.service';

@Component({
  selector: 'app-supplyedit',
  templateUrl: './supplyedit.component.html',
  styleUrls: ['./supplyedit.component.css']
})
export class SupplyeditComponent implements OnInit {

  addForm:FormGroup;
  addlgForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private supplyService:SupplyService,private tokenClaim:TokenClaim) { }
  supply:Supply
  ngOnInit(): void {
    this.get()
    this.createAddForm()

  }

  createAddForm(){
    
    this.addlgForm= this.formBuilder.group({
      supplyId:[+localStorage.getItem("supplyId"),Validators.required],
      productName:[,Validators.required],
      unitInStock:[,Validators.required],
      purchaseDate:[,Validators.required],
      purchasePrice:[,Validators.required],
      userName:[,Validators.required],

    })
  }
  
  
  addlg(){
    if(this.addlgForm.valid){
      let supplyModel=Object.assign({},this.addlgForm.value);
      this.supplyService.update(supplyModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
        
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }

  }

  add(){

    if(this.addForm.valid){
      let supplyModel=Object.assign({},this.addForm.value);
      this.supplyService.update(supplyModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
      localStorage.removeItem("supplyId")
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }

  }
  get(){
    
    this.supplyService.getById(+localStorage.getItem("supplyId")).subscribe(response=>{
      this.addlgForm.controls["productName"].setValue(response.data.productName)
      this.addlgForm.controls["unitInStock"].setValue(response.data.unitInStock)
      this.addlgForm.controls["purchaseDate"].setValue(response.data.purchaseDate)
      this.addlgForm.controls["purchasePrice"].setValue(response.data.purchasePrice)
      this.addlgForm.controls["userName"].setValue(this.tokenClaim.getName())
      
    })
    
    
  }
  

}
