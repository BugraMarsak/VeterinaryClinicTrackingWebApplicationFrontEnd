import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SupplyService } from 'src/app/services/supply.service';

@Component({
  selector: 'app-add-supply',
  templateUrl: './add-supply.component.html',
  styleUrls: ['./add-supply.component.css']
})
export class AddSupplyComponent implements OnInit {
  addForm:FormGroup;
  addlgForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private supplyService:SupplyService) { }

  ngOnInit(): void {
    this.createAddForm()
  }

  createAddForm(){
    this.addForm= this.formBuilder.group({
      
      productName:["",Validators.required],
      unitInStock:["",Validators.required],
      purchaseDate:["",Validators.required],
      purchasePrice:["",Validators.required]
    })
    this.addlgForm= this.formBuilder.group({
      
      productName:["",Validators.required],
      unitInStock:["",Validators.required],
      purchaseDate:["",Validators.required],
      purchasePrice:["",Validators.required]
    })
  }
  
  addlg(){
    if(this.addlgForm.valid){
      let supplyModel=Object.assign({},this.addlgForm.value);
      this.supplyService.add(supplyModel).subscribe(response=>{
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
      this.supplyService.add(supplyModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
      
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }

  }

}
