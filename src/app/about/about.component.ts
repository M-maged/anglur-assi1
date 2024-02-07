import { Component } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
// imgSrc:string="./assets/image/post-1.jpg";
// imgTitlle:string="back car view";
// buttonColor:string="green";

// open():void{
//   alert('back car view');

// }

datarecipes:any[]=[];

constructor(private _ApiDataService:ApiDataService){
  this._ApiDataService.getpizza().subscribe((data)=>{ 
    this.datarecipes=data.recipes

  })
}




}
