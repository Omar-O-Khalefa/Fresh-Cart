import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userInfo:any;

baseUrl:string = "https://ecommerce.routemisr.com/api/v1/auth/"
  constructor( private _HttpClient:HttpClient) {
   }

   register(userData:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl+"signup",userData)
   }
   login(userData:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl+"signin",userData)
   }


   decode():void{
    const etoke=localStorage.getItem("userToken")
    if(etoke!=null){
      const decoded = jwtDecode(etoke)
      console.log(decoded);
      this.userInfo=decoded
    }
   }
}
