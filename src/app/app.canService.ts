import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {ActivatedRoute,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

//import {UserInformation} from './user.login'

@Injectable()


export class canService implements CanActivate{

constructor(private _active:ActivatedRoute){}
    canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
       
       if(next.params.name === "Eve"){
        return true;

    }else{
        return false
    }
}
}