import { Component } from '@angular/core';
import {FormsModule , NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
    submit(myForm:NgForm){
    console.log(myForm.value)
  }

}
