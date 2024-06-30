import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService implements OnInit {
  baseUrl:string=`https://ecommerce.routemisr.com`
  constructor(private _HttpClient:HttpClient) { }
 
  ngOnInit(): void {
    
  }

  addProduct(prodId:string|undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'/api/v1/wishlist',
    {
      productId: prodId
  }
    )
  }
  deletProduct(prodId:string|undefined):Observable<any>{
    return this._HttpClient.delete(this.baseUrl+'/api/v1/wishlist/'+prodId
    )
  }
  getAllprd(prodId:string|undefined):Observable<any>{
    return this._HttpClient.get(this.baseUrl+'/api/v1/wishlist',
  
    )
  }
}
