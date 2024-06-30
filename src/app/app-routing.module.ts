import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { authgardGuard } from './core/guard/authgard.guard';

const routes: Routes = [
  {path:"",canActivate:[authgardGuard],
  loadComponent:()=>import("./layouts/blank/blank.component").then((m)=>(m.BlankComponent)),
  children:[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",loadComponent:()=>import("./components/home/home.component").then((m)=>(m.HomeComponent)),title:"Home"},
    {path:"allorders",loadComponent:()=>import("./components/home/home.component").then((m)=>(m.HomeComponent)),title:"Home"},
    // {path:"allorders",loadComponent:()=>import("./components/allorders/allorders.component").then((m)=>(m.AllordersComponent)),title:"Allorders"},
    {path:"payment/:id",loadComponent:()=>import("./components/payment/payment.component").then((m)=>(m.PaymentComponent)),title:"Payment"},
    {path:"productdetails/:id",loadComponent:()=>import("./components/productdetails/productdetails.component").then((m)=>(m.ProductdetailsComponent)),title:"Home"},
    {path:"categoires",loadComponent:()=>import("./components/categories/categories.component").then((m)=>(m.CategoriesComponent)),title:"Categoires"},
    {path:"categoirDetails/:id",loadComponent:()=>import("./components/categdetails/categdetails.component").then((m)=>(m.CategdetailsComponent)),title:"CategoireDetails"},
    {path:"brands",loadComponent:()=>import("./components/brands/brands.component").then((m)=>(m.BrandsComponent)),title:"Brands"},
    {path:"products",loadComponent:()=>import("./components/products/products.component").then((m)=>(m.ProductsComponent)),title:"Products"},
    {path:"cart",loadComponent:()=>import("./components/cart/cart.component").then((m)=>(m.CartComponent)),title:"Cart"},
  
]},
{path:"",
loadComponent:()=>import("./layouts/auth/auth.component").then((m)=>(m.AuthComponent)),
children:[
  {path:"login",loadComponent:()=>import("./components/login/login.component").then((m)=>(m.LoginComponent)),title:"Login"},
  {path:"register",loadComponent:()=>import("./components/register/register.component").then((m)=>(m.RegisterComponent)),title:"Register"},
  {path:"forgotpassword",loadComponent:()=>import("./components/forgot-password/forgot-password.component").then((m)=>(m.ForgotPasswordComponent)),title:"Forgot Password"},
]},

{path:"**",loadComponent:()=>import("./components/notfound/notfound.component").then((m)=>(m.NotfoundComponent)),title:"NotFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
