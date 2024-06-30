export interface Root {
    status: string
    numOfCartItems: number
    data: allCartprod
  }
  
  export interface allCartprod {
    _id: string
    cartOwner: string
    products: Products[]
    createdAt: string
    updatedAt: string
    __v: number
    totalCartPrice: number
  }
  
  export interface Products {
    count: number
    _id: string
    product: Product2
    price: number
  }
  
  export interface Product2 {
    subcategory: Subcategory[]
    _id: string
    title: string
    quantity: number
    imageCover: string
    category: Category
    brand: Brand
    ratingsAverage: number
    id: string
  }
  
  export interface Subcategory {
    _id: string
    name: string
    slug: string
    category: string
  }
  
  export interface Category {
    _id: string
    name: string
    slug: string
    image: string
  }
  
  export interface Brand {
    _id: string
    name: string
    slug: string
    image: string
  }
  