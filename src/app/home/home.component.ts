import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  h2:string='welcom to.';
  h1:string='moha angluar site';
  h3:string='Lorem, ipsum dolor.';





userName:string="mohamed 3lwan";
userAge:number=30;
imgSrc:string="./assets/image/hero-bg.jpg";
imgTitlle:string="hero"
welcome():void{
  alert("hellooooooooo")
}
work():void{
  alert("hello work")
}




}
