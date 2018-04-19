import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";

import { MyComponent } from './app.component';
import {MyComponentadta} from './app.secondCom';
import {MyRouteService} from './app.route.module';
import {MySortPipe} from './lazy/app.pipe';
import {RouterModule,Routes} from '@angular/router';
import {canService} from './app.canService';

import {UserInformation} from './user.login';


const myRoute:Routes=[
  {path:'second',component:MyComponentadta},
  {path:'user/:name',component:UserInformation,canActivate:[canService]}
]

@NgModule({
  declarations: [
    MyComponent,
    MyComponentadta,
    MySortPipe,
    UserInformation
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MyRouteService,
    RouterModule.forRoot(myRoute)
  ],
  providers: [canService],
  bootstrap: [MyComponent]
})
export class AppModule { }
