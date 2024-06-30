export interface Root {
    results: number
    metadata: Metadata
    data: categoriesInterface[]
  }
  
  export interface Metadata {
    currentPage: number
    numberOfPages: number
    limit: number
  }
  
  export interface categoriesInterface {
    _id: string
    name: string
    slug: string
    image: string
    createdAt: string
    updatedAt: string
  }
  