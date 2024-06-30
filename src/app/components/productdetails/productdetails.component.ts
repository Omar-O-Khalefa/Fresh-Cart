import { product } from './../../core/interfaces/allproduct';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { prodDetinte } from 'src/app/core/interfaces/productdetails';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import{CarouselModule} from 'ngx-owl-carousel-o'
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit{

  prductId:string|null=""
productdetals:any=null

constructor(private _acticveted:ActivatedRoute,
  private _ProductService:ProductService,
  private _Renderer2:Renderer2,
  private _CartService:CartService,
  private _ToastrService:ToastrService
  ){}


ngOnInit(): void {


    this._acticveted.paramMap.subscribe({
      next:(parm)=>{
this.prductId = parm.get("id")
console.log(this.prductId);



      }
    })

this._ProductService.getProductdetails(this.prductId).subscribe({
  next:(respons)=>{
    console.log(respons);
    this.productdetals = respons.data
  }
})
}

addproduct(id:any,addbtnde:any){
  this._Renderer2.setAttribute(addbtnde,'disabled','true')
  this._CartService.addTocart(id).subscribe(
    {
      next:(respons)=>{
        console.log(respons);
        this._Renderer2.removeAttribute(addbtnde,'disabled')
        this._ToastrService.success(respons.message)
        this._CartService.cartCount.next(respons.numOfCartItems)
        
      },
      error:(err)=>{
        console.log(err);
        this._Renderer2.removeAttribute(addbtnde,'disabled')
      }
    }
  )
  
  }
  

prdouctsliderdet: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  nav: false,
  autoplay:true,
  autoplaySpeed:1000,
  autoplayTimeout:4000
}
}
