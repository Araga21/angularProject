import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private ps : ProductService,private route:Router,private consP:ConsumerProductService){}
  addForm!:FormGroup;

  ngOnInit() {
    this.addForm = new FormGroup({
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required, Validators.minLength(4)]),
      price:new FormControl('', Validators.required),
      quantity:new FormControl('', Validators.required),
      like:new FormControl('', Validators.required)

    });
  }

save(){
  //console.log(this.addForm.value);
  //this.ps.addProduct(this.addForm.value)
  //this.route.navigateByUrl('/product')
this.consP.addProduct(this.addForm.value).subscribe(()=>this.route.navigateByUrl('/product'))


}
}
