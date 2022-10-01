import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

   rxjss :any = ['Fromevents','OfOperators','FromOperators','Pluck','Subjects','Replay'];

  constructor() { }

  ngOnInit(): void {
    
  }



}
