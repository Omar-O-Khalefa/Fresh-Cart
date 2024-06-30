import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
baseUrl:string=`https://ecommerce.routemisr.com`
useremail:string=''
restCodech:string=''
  constructor(private _HttpClient:HttpClient) { }

  forgotPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`/api/v1/auth/forgotPasswords`,userEmail
  )
  }
  restCode(restcod:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`/api/v1/auth/verifyResetCode`,restcod
   )
  }
  changeforgotenpassword(dat:object):Observable<any>{
    return this._HttpClient.put(this.baseUrl+`/api/v1/auth/resetPassword`,dat
  
  )}
}
