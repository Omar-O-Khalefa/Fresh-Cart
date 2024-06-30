import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-categdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categdetails.component.html',
  styleUrls: ['./categdetails.component.scss']
})
export class CategdetailsComponent implements OnInit {
 
  cateid:string|null=''
  categDetails:any={}
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService){}

ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parm)=>{

this.cateid=parm.get('id')


      }
    })
    this._ProductService.getCategoireDetails(this.cateid).subscribe({
      next:(ress)=>{
        console.log(ress.data);
        this.categDetails=ress.data

      }
    })
}

}
