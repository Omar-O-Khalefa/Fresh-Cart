import {  RouterModule, Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,Validators,ReactiveFormsModule,FormControl, FormControlOptions } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
lodingSpin:boolean=false
errMassge :string =''
constructor(private _AuthService:AuthService,private _router:Router){}


  registerFrom : FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    rePassword:new FormControl('',),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[1250][0-9]{8}$/)]),
  },{validators:[this.repassword]}as FormControlOptions)


repassword(grop:FormGroup):void{
 const pass=grop.get("password")
 const repass=grop.get("rePassword")
 if(repass?.value ==""){
  repass?.setErrors({required:true})
 }else if(pass?.value!= repass?.value){
  repass?.setErrors({mismatch:true})

 }
 }

 handelForm(){
  this.lodingSpin=true
  
  const userData=this.registerFrom.value

if(this.registerFrom.valid===true){
  this._AuthService.register(userData).subscribe(
    {next:(respons)=>{
      
      this.lodingSpin=false
      if(respons.message=='success'){
        this._router.navigate(['/login'])
      }
     
    },
    error:(err)=>{
      console.log(err);
      this.lodingSpin=false
      this.errMassge = err.error.message
      
  
    }
   
   
  
      }
      
  
   
      
      
    
   )
}

 }

}


