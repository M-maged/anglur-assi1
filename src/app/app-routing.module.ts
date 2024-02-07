import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not.found/not.found.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'moha 1',redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent,title:'moha 1/ home'},
  {path:'about',component:AboutComponent,title:'moha 1/about'},
  {path:'contact',component:ContactComponent,title:'moha 1/contact'},
  {path:'**',component:NotFoundComponent,title:'moha 1/NOT FOUND PAGE'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
