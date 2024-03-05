import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  login=new FormControl('',Validators.required);
  pwd=new FormControl('', Validators.required);

  Form:FormGroup = new FormGroup(
    { login:new FormControl('',[Validators.required, Validators.minLength(4)]),
      pwd:new FormControl('', Validators.required)
    }
    );


  save(){
    console.log(this.login);
    console.log(this.pwd);

  }
}
