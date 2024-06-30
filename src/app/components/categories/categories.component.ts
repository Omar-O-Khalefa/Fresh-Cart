import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { categoriesInterface } from 'src/app/core/interfaces/categ';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

categList:categoriesInterface[]=[]as categoriesInterface[]

constructor(private _ProductService:ProductService){}

  ngOnInit(): void {
      this._ProductService.getCategoires().subscribe({
        next: (res)=>{
          this.categList=res.data
          console.log(this.categList);
        }
      })
  }
}
