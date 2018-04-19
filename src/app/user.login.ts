import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector:'userinfo',
    template:'<h3>mamatha</h3>'
})

export class UserInformation{

    constructor(private _active:ActivatedRoute){}
//   ngOnInit(){
//     this.getData();
//   }

    getData(){
    return this._active.snapshot.params.name
    }

}