import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenClaim } from 'src/app/services/tokenclaim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  updForm:FormGroup;
  constructor(private userService:UserService,private toastrService:ToastrService,private tokenClaim:TokenClaim,private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.get()
    this.updateForm()
  }

  
  updateForm(){
    this.updForm= this.formBuilder.group({
      Id:[+this.tokenClaim.getid(),Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      phoneNumber:["",Validators.required],
      address:["",Validators.required],
      photo:["",Validators.required],
    })
  }
  get(){
    this.userService.getById(this.tokenClaim.getid()).subscribe(response=>{
      console.log(response.data)
      this.updForm.controls["firstName"].setValue(response.data.firstName)
      this.updForm.controls["lastName"].setValue(response.data.lastName)
      this.updForm.controls["email"].setValue(response.data.email)
      this.updForm.controls["phoneNumber"].setValue(response.data.phoneNumber)
      this.updForm.controls["address"].setValue(response.data.address)
      this.updForm.controls["photo"].setValue(response.data.photo)
      
    })
  }

  update(){
    console.log(this.updForm.value)
    if(this.updForm.valid){
      let updModel=Object.assign({},this.updForm.value);
      this.userService.update(updModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
      
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }
  }



}

