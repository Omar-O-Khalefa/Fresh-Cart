import {  RouterModule, Router,RouterLink } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,Validators,ReactiveFormsModule,FormControl, FormControlOptions } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
UserToken:string=''
  lodingSpin:boolean=false
errMassge :string =''
constructor(private _AuthService:AuthService,private _router:Router){}


loginform : FormGroup = new FormGroup({
    
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
   
  })



 handelForm(){
  this.lodingSpin=true

  const userData=this.loginform.value
  if(this.loginform.valid===true){
    this._AuthService.login(userData).subscribe(
      {next:(respons)=>{
        if(respons.message=='success'){
          this._router.navigate(['/home'])
          this.UserToken=respons.token
          localStorage.setItem("userToken", this.UserToken) 
          this._AuthService.decode()
        }
        
        this.lodingSpin=false
       
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
