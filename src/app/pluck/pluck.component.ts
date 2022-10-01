import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, toArray,pluck } from 'rxjs/operators';



@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }

   users = [
    {
    name:'deepak',
    skill:'angular'
    },
    {
      name:'nikhil',
      skill:'react'
      },
    {
      name:'hari-om',
      skill:'gst'
     },

];

datas: any

  ngOnInit(): void {
    // from(this.users).pipe(map(data=> data.name),toArray())
    // .subscribe((res)=>{
    //  console.log(res);
    // })

    from(this.users).pipe(
      // map(data=> data.name)
      pluck('name')
      ,toArray())
    .subscribe((res)=>{
       this.datas = res;
     console.log(this.datas);
    //  console.log(this.users,'datas');
    })
  }

}
