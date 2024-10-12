import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username="";
  password="";
  errmsg="";

  constructor(private auth: AuthService, private router: Router){}

  login(){
    if(this.username.trim().length===0){
      this.errmsg="username is required";
    }
    else if(this.password.trim().length===0){
      this.errmsg="password is required";
    }
    else{
      this.errmsg="";
      let res=this.auth.login(this.username,this.password);
      if(res ===200){
        this.router.navigate(['home'])
      }
      if(res ===403){
        this.errmsg="invalid credentials";
      }
    }
  }

}
