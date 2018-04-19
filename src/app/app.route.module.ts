
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

const routes:Routes=[
  {path:'lazy',loadChildren: './lazy/lazy.module'}
]

@NgModule({
   imports:[
       RouterModule.forRoot(routes)
   ],
   exports:[RouterModule]
})

export  class MyRouteService { }