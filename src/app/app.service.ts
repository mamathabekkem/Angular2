import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';


@Injectable()

export class MyService{

    constructor(private _http:Http){}


    getdata():Observable<any>{
       return this._http.get("https://reqres.in/api/users?page=2")
        .map((res:Response)=>res.json())
        .catch(this.handleError)
        .retry(3);
    };;
    handleError(error:Response){
     return Observable.throw(error)
    }

}