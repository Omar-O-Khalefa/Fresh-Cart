import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  cartID:any=''

constructor(private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){}


ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parms)=>{
       this.cartID= parms.get('id')
        
      }
    })
}

orderForm:FormGroup= new FormGroup({
  details:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required]),
  city:new FormControl('',[Validators.required])
})

handelFormpay():void{
  console.log(this.orderForm.value);
  this._CartService.checkOut(this.cartID,this.orderForm.value).subscribe({
    next:(resp)=>{
      console.log(resp);
      if(resp.status =='success'){
        window.open(resp.session.url)
      }
    }

  })
}



}
