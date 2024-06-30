import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
constructor(private _router:Router,private _CartService:CartService){}

cartCo:number=0
ngOnInit(): void {
    this._CartService.cartCount.subscribe({
      next: (resp)=>{
   
        this.cartCo=resp
      }
    })

    this._CartService.getAllcart().subscribe({
      next: (res)=>{
       
        this.cartCo=res.numOfCartItems
      },
      error:()=>{}
    })
}

  sinOut():void{
    localStorage.removeItem("userToken")
    this._router.navigate(['/login'])
  }

}
