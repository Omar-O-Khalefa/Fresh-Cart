import { Metadata } from './../../core/interfaces/categ';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { product } from 'src/app/core/interfaces/allproduct';
import { categoriesInterface } from 'src/app/core/interfaces/categ';
import { Router ,RouterLink, RouterModule} from '@angular/router';
import { CutNamePipe } from 'src/app/core/pipe/cut-name.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,CutNamePipe,CarouselModule,RouterModule,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
constructor(
  private _ProductService:ProductService,
  private _Router:Router , 
  private _CartService:CartService ,
  private _Renderer2:Renderer2,
  private _ToastrService:ToastrService
  ){}

  pageSize:number=0
  p:number =0
  total:number =0

products:product[]=[]
categoris:categoriesInterface[]=[]

  ngOnInit(): void {
    this._ProductService.getallproduct().subscribe({
      next:(respons)=>{
        // console.log(respons)
       this.products =respons.data

       this.pageSize =respons.metadata.limit
       this.p =respons.metadata.currentPage
       this.total =respons.results
        
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



      pageChanged(event:any){
        this._ProductService.getallproduct(event).subscribe({
          next:(respons)=>{
            // console.log("product"+respons.data);
           this.products =respons.data

         this.pageSize =respons.metadata.limit
         this.p =respons.metadata.currentPage
         this.total =respons.results
            
          }
        })
      }

}
