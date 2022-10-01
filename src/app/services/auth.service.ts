import { Injectable } from '@angular/core';
import {Auth,signInWithEmailAndPassword} from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth:Auth) { }

  isLogin:boolean = false;

  login(email:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,email,password));
  }
  
  register(){

  }

  logout(){

  }

}
