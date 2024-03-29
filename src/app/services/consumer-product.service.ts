import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private http:HttpClient) { }
  getProcudct() {
    return this.http.get<Product[]>("http://localhost:3000/products")

  }
  getProcudctById(id:number) {
    return this.http.get<Product>("http://localhost:3000/products"+'/'+id)

  }
  addProduct(p:Product){
    return this.http.post("http://localhost:3000/products",p)

  }
  deleteProduct(id:number){
    return this.http.delete("http://localhost:3000/products"+'/'+id)

  }
  updateProduct(id:number, p:Product){
    return this.http.put("http://localhost:3000/products"+'/'+id,p)

  }

}
