import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct: Product[] = [
    { id: 0, title: 'Product 1', price: 100, quantity: 0, like: 0 },
    { id: 1, title: 'Product 2', price: 200, quantity: 0, like: 0 },
    { id: 2, title: 'Product 3', price: 300, quantity: 30, like: 0 },
  ];
  constructor() { }

  addProduct(p:Product){
    this.listProduct.push(p)
  }
}
