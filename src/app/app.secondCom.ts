
import {Component,OnInit} from '@angular/core';

import {MyService} from './app.service';


@Component({
   selector:'apptwo',
  template:`
  <div class="container">
  <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let n of data">
        <td><a [routerLink]="['/user',n.first_name]">{{n.first_name}}</a></td>
        <td>{{n.last_name}}</td>
        <td>{{n.avatar}}</td>
      </tr>      
    </tbody>
  </table>
</div>
<router-outlet></router-outlet>
  `,
  providers:[MyService]
})


export class MyComponentadta implements OnInit{

constructor(private _service:MyService){}

  data:string;
  ngOnInit(){
this._service.getdata()
.subscribe(
    res=>{this.data=res.data},
    err=>{console.log(err)},
    ()=>(console.log("completed"))
)
   


  }
  // getUserName(){
  //   this.
  // }
}

