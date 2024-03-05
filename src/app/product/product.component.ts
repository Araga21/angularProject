import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private ps:ProductService, private cs:CalculService, private consP:ConsumerProductService ){}
  priceMax!: number;
  alert!:number
  listProduct:Product[]=[]

  ngOnInit(){
    //this.listProduct=this.ps.listProduct
    //this.alert=this.cs.stat(this.listProduct,'quantity',0)
    
    this.consP.getProcudct().subscribe((data)=>this.listProduct=data)
  }
  increment(id: number) {
    this.listProduct[id].like++;
  }
  buy(id: number) {
    this.listProduct[id].quantity--;
  }
  delete(id: number) {
    this.consP.deleteProduct(id).subscribe(() => this.ngOnInit())
  }
}
