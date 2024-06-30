import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { product } from 'src/app/core/interfaces/allproduct';
import { CutNamePipe } from 'src/app/core/pipe/cut-name.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { categoriesInterface } from 'src/app/core/interfaces/categ';
import { Router ,RouterLink, RouterModule} from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CutNamePipe,CarouselModule,RouterModule,SearchPipe,FormsModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
constructor(
  private _ProductService:ProductService,
   private _Router:Router , 
   private _CartService:CartService ,
   private _Renderer2:Renderer2,
   private _ToastrService:ToastrService
   ){}

   term:string=''
products:product[]=[]
categoris:categoriesInterface[]=[]
ngOnInit(): void {
this._ProductService.getallproduct().subscribe({
  next:(respons)=>{
    // console.log("product"+respons.data);
   this.products =respons.data
    
  }
})
this._ProductService.getCategoires().subscribe({
  next:(respons)=>{
    console.log(respons.data);
   this.categoris =respons.data
    
  }
})
}
addproduct(id:any,addbtn:any){
this._Renderer2.setAttribute(addbtn,'disabled','true')
this._CartService.addTocart(id).subscribe(
  {
    next:(respons)=>{
      console.log(respons);
      this._Renderer2.removeAttribute(addbtn,'disabled')
      this._ToastrService.success(respons.message)
      this._CartService.cartCount.next(respons.numOfCartItems)
      
    },
    error:(err)=>{
      console.log(err);
      this._Renderer2.removeAttribute(addbtn,'disabled')
    }
  }
)

}

movedslider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplaySpeed:1000,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: false
}
staticslider: OwlOptions = {
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

