import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {lazyModule} from './lazy.component';


const appRoutes:Routes=[
    {path:'',component:lazyModule}
]

@NgModule({
    declarations:[lazyModule],
    imports:[
        CommonModule,
        RouterModule.forChild(appRoutes)
    ]
})



export default class lazyService{}