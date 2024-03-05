import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-upadate-product',
  templateUrl: './upadate-product.component.html',
  styleUrls: ['./upadate-product.component.css']
})
export class UpadateProductComponent {
  constructor(private ps : ProductService,private route:Router,private consP:ConsumerProductService,private Act:ActivatedRoute){}
  addForm!:FormGroup;
id!:number;
p!:Product;
  ngOnInit() {
    this.addForm = new FormGroup({
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required, Validators.minLength(4)]),
      price:new FormControl('', Validators.required),
      quantity:new FormControl('', Validators.required),
      like:new FormControl('', Validators.required)

    });
    //1 recuper l'id depuis l'url
    this.id=this.Act.snapshot.params['id'];
    //2 recuperer le product dans p
    this .consP.getProcudctById(this.id).subscribe((data)=>{this.p=data 
    //3 
    this.addForm.patchValue(this.p)
  })
  }
save(){
  this.consP.updateProduct(this.id,this.addForm.value).subscribe(()=>this.route.navigateByUrl('/product'))

}
}
