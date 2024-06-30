import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,Validators,ReactiveFormsModule,FormControl, FormControlOptions } from '@angular/forms';
import {  RouterModule, Router } from '@angular/router';
import { ForgotpasswordService } from 'src/app/core/services/forgotpassword.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
step1:boolean=true
step2:boolean=false
step3:boolean=false
 userEmail:string=''
 lodingSpin:boolean=false
 userMsg:string =''
constructor(private _ForgotpasswordService:ForgotpasswordService,private _router:Router){}

  forgotpassword :FormGroup=new FormGroup(
    {
      email:new FormControl('',[Validators.required,Validators.email])
    }
  )

  handelforgotpas():void{
   let userEm =this.forgotpassword.value
   this.userEmail=userEm.email
   console.log(userEm);
   this.lodingSpin=true
this._ForgotpasswordService.forgotPassword(userEm).subscribe({
  next:(res)=>{
    this.userMsg=res.message
    this.lodingSpin=false
    console.log(res);
if(res.statusMsg =="success"){
  this. step1=false
this. step2=true
this. step3=false
}
  },
  error:(err)=>{
    this.userMsg=err.error.message
    console.log(err);
    this.lodingSpin=false

  }
})
  }
  restCode :FormGroup=new FormGroup(
    {
      resetCode:new FormControl('',[Validators.required])
    }
  )

  handelrestCode():void{
    this.lodingSpin=true
    let restcode = this.restCode.value
    console.log(restcode);
    
    this._ForgotpasswordService.restCode(restcode).subscribe({
      next:(res)=>{
        this.userMsg=res.message
        this.lodingSpin=false
        console.log(res);
        if(res.status =="Success"){
          this. step1=false
        this. step2=false
        this. step3=true
        }
      },
      error:(err)=>{
        this.userMsg=err.error.message
        console.log(err);
        this.lodingSpin=false
    
      }
    })
  }


  changeforgotpassword :FormGroup=new FormGroup(
    {
      newPassword:new FormControl('',[Validators.required])
    }
  )
  handelchanforpass():void{
    this.lodingSpin=true
    let rstFormV= this.changeforgotpassword.value
    rstFormV.email=this.userEmail
    console.log(rstFormV);
    
    this._ForgotpasswordService.changeforgotenpassword(rstFormV).subscribe({
      next:(res)=>{
        this.userMsg=res.message
        this.lodingSpin=false
        console.log(res);
        if(res.token){

          localStorage.setItem("userToken", res.token) 
          this._router.navigate(['/home'])
        }
    
      },
      error:(err)=>{
        this.userMsg=err.error.message
        console.log(err);
        this.lodingSpin=false
    
      }
    })
  }
}
