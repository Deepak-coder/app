import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  isLoginMode:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    // this.isLoginMode = !this.isLoginMode;
    this.router.navigate(['./template-form']);   
  }

}
