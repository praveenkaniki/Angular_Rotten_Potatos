import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router, private http:HttpClient) { }

  login(uname:string,pword: string){
    if(uname==='praveen' && pword==='kaniki'){
      return 200;
    }else{
      return 403;
    }  
  }
  logOut(){
    this.route.navigate(['login']);
  }
  getApi(){
    return this.http.get('../../assets/data/trending-movies.json');
  }
}


