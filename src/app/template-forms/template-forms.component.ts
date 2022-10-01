import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

   isLoginMode:boolean = false;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
    this.router.navigate(['./reactive-form']);

  }

  signIn(value:any)
  {
    if(value.email != '' && value.password != '')
    console.log("input datas" , value);
    else
      console.log('empty datas');


    const email = value.email;
    const password = value.password;
    this.auth.login(email,password).subscribe((resData:any) =>{
      console.log('result for login',resData);
      this.router.navigate(['./homepage']);

    })
  }
}
