import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

constructor(private _CartService:CartService,private _Renderer2:Renderer2){}
 
cartDetails:any=null


ngOnInit(): void {
    this._CartService.getAllcart().subscribe({
      next:(respons)=>{
        console.log(respons.data);
        this.cartDetails = respons.data
   
      },
      error:(err)=>{
        console.log(err);
      }

    })
  }
  
  removItem(id:string,btn:any):void{
    this._Renderer2.setAttribute(btn,'disabled','true')
    this._CartService.removeCartitem(id).subscribe({
      next:(resp)=>{
        console.log(resp);
        this.cartDetails = resp.data
        this._Renderer2.removeAttribute(btn,'disabled')
        this._CartService.cartCount.next(resp.numOfCartItems)
        
        
      },
      error:(err)=>{
        console.log(err);
        this._Renderer2.removeAttribute(btn,'disabled')
      }
    })
  }
  
  changeCount(prodId:string,countNum:number,changeCounup:any,changeCounudown:any):void{

    if(countNum>=1){
      this._Renderer2.setAttribute(changeCounup,'disabled','true')
      this._Renderer2.setAttribute(changeCounudown,'disabled','true')
    }
   
this._CartService.updateCountnumber(prodId,countNum).subscribe({
  next:(resp)=>{
    console.log(resp);
    this.cartDetails = resp.data
    this._Renderer2.removeAttribute(changeCounup,'disabled')
    this._Renderer2.removeAttribute(changeCounudown,'disabled')
  },
  error: (err)=>{
    console.log(err);
    this._Renderer2.removeAttribute(changeCounup,'disabled')
    this._Renderer2.removeAttribute(changeCounudown,'disabled')
  }
})
  }

deletUsercartitems(Clerbtn:HTMLButtonElement):void{
this._Renderer2.setAttribute(Clerbtn,'disabled','true')

this._CartService.deleteUSercart().subscribe({
  next:(resp)=>{
    console.log(resp);
    if(resp.message == "success"){
    this.cartDetails = null
    this._CartService.cartCount.next(0)
    this._Renderer2.removeAttribute(Clerbtn,'disabled')
    }
  },
  error: (err)=>{
    console.log(err);
    this._Renderer2.removeAttribute(Clerbtn,'disabled')
  }
})
}

  }
