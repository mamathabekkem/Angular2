
import {Component,OnInit} from '@angular/core';

import {MyService} from '../app.service';


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
        <td>{{n.first_name}}</td>
        <td>{{n.last_name}}</td>
        <td>{{n.avatar}}</td>
      </tr>      
    </tbody>
  </table>
</div>
  `,
  providers:[MyService]
})


export class lazyModule implements OnInit{

constructor(private _service:MyService){}

  data:string;
  ngOnInit(){
this._service.getdata()
.subscribe(
    res=>{this.data=res.data
    },
    err=>{console.log(err)},
    ()=>(console.log("completed"))
)
  }
}

