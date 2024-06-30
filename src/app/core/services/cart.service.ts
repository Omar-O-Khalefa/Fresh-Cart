import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = "https://ecommerce.routemisr.com"

  cartCount : BehaviorSubject <number>=new  BehaviorSubject(0)

  myToken:any={token:localStorage.getItem("userToken")}


  addTocart(prodId:string):Observable<any>{
   return this._HttpClient.post(this.baseUrl+'/api/v1/cart',
    {
      productId:prodId
    },
  
)}


  getAllcart():Observable<any>{
   return this._HttpClient.get(this.baseUrl+'/api/v1/cart',

    {
    headers:this.myToken
    }
)}
  deleteUSercart():Observable<any>{
   return this._HttpClient.delete(this.baseUrl+'/api/v1/cart',

  
)}



  removeCartitem(prodId:string):Observable<any>{
   return this._HttpClient.delete(this.baseUrl+'/api/v1/cart/'+prodId,

 
)}



  updateCountnumber(prodId:string,cuountNum:number):Observable<any>{
   return this._HttpClient.put(this.baseUrl+'/api/v1/cart/'+prodId,
   {
    
      "count": cuountNum
  
   },

   
)}

checkOut(id:string,detals:object):Observable<any>{
  return this._HttpClient.post(this.baseUrl+
    `/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,

    {
      shippingAddress:detals
  },

  
  )
}

  }