import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nesting-reactive-forms',
  templateUrl: './nesting-reactive-forms.component.html',
  styleUrls: ['./nesting-reactive-forms.component.css']
})
export class NestingReactiveFormsComponent implements OnInit {

  value?:boolean;
  value2?:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
