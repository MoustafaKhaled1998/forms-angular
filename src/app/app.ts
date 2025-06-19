import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Register } from "./register/register";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Register],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  isLoginShowen = true;
  isRegisterShowen = false;

  showLogin() {
    this.isLoginShowen = true;
    this.isRegisterShowen = false;
  }

  showRegister() {
    this.isRegisterShowen = true;
    this.isLoginShowen = false;
  }
}


