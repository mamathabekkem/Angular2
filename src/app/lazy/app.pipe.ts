import {Pipe,PipeTransform} from '@angular/core';


@Pipe({
    name:'sortpipe'
})

export class MySortPipe implements PipeTransform {
   transform(value:any[],args:string):any{
        if(args == 'accending'){
            return value.sort();
        }else{
            return value.reverse(); 
        }
   }
}