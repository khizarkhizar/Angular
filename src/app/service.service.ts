import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Idata } from './data';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _url:string="/assets/data/mydata.json"
  constructor(private http:HttpClient){}

  getdata():Observable<Idata[]>{
    return this.http.get<Idata[]>(this._url);
  }
}
