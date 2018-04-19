import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {Http,Response} from "@angular/http";

import 'rxjs/add/operator/map';

import {Component,OnInit} from '@angular/core';



@Component({
   selector:'app',
  template:`<h1>mamatha</h1>   
  <div style="text-align:center">
  <h1>
    <a routerLink="/lazy">Lazy component</a><br/>
    <a routerLink="/second">Second component</a>
  </h1>
</div>

<router-outlet></router-outlet>
  {{data | sortpipe:'accending'}}
  {{'05/09/2017'| date:fulldate}}


  <ul *ngFor="let node of persons" [ngSwitch]="node.country">

  <li *ngSwitchCase="'USA'">{{node.name}}</li>
  <div [ngStyle]="{'background-color': node.states === 'IND' ? 'green' : 'blue'}">{{node.name}}</div>
  </ul>


  ` 
})


export class MyComponent implements OnInit{

constructor(private _http:Http){}

persons: any[] = [
  {
  "name": "Andrew",
  "states": 'UK'
  },
  {
  "name": "Jacob",
  "country": 'USA'
  },
  {
  "name": "Aamka",
  "country": 'CA'
  },
  {
  "name": "Kangna",
  "country": 'IND'
  },
  {
  "name": "William",
  "country": 'USA'
  },
  {
  "name": "Palak",
  "country": 'IND'
  }
  ];

  data=[4,5,7,5,2,9,5,4];
  ngOnInit(){

    const MyOberable=Observable.create((observer:Observer<any>)=>{
      setTimeout(()=>{
        this._http.get('https://reqres.in/api/users?page=2')
        .map((res:Response)=>observer.next(res.json()));
      },1000);
      setTimeout(()=>{
        observer.next("second package");
      },4000);
       setTimeout(()=>{
         observer.next("third pachnage");
       },6000);
    });

    MyOberable.subscribe(
      (data:string)=>{console.log(data)},
      (error:string)=>{console.log(error)},
      ()=>{console.log("completed")}
    )
  }
}

