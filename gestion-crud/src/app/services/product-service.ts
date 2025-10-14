import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly api_url = "http://localhost:3000/products"

  products : Product[]

  constructor(private http: HttpClient){
    this.products = [];
  }

  getProducts(){
    return this.http.get<Product[]>(this.api_url)
  }

  getProduct(id : string){
    return this.http.get<Product>(this.api_url + "/" + id)
  }
  
  postProduct(m : Product){
    return this.http.post<Product>(this.api_url, m)
  }

  deleteProduct(id : string){
    return this.http.delete<Product>(this.api_url + "/" + id)
  }

   updateProduct(p: Product) {
    return this.http.put<Product>(this.api_url + "/" + p.id, p);
  }
}
