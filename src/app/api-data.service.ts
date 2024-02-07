import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _HttpClient:HttpClient) {}

getpizza():Observable<any>
{
  return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=pasta`)
  
}
}
