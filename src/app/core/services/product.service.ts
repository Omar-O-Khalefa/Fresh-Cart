import { product } from './../interfaces/allproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
productid:string=''
  constructor(private _httpclinent:HttpClient) { }
baseUrl:string='https://ecommerce.routemisr.com/api/v1/'
  getallproduct(page:number=1):Observable<any>{
    return this._httpclinent.get(this.baseUrl+`products?page=${page}`)
  }
  getCategoires():Observable<any>{
    return this._httpclinent.get(this.baseUrl+'categories')
  }
  getCategoireDetails(id:string|null):Observable<any>{
    return this._httpclinent.get(this.baseUrl+'categories/'+id)
  }
  getProductdetails(id:string|null):Observable<any>{
    return this._httpclinent.get(this.baseUrl+'products/'+id)
  }
}
