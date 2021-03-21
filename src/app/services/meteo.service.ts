import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
//const api_key=environment.apiKey;
//const Url=environment.url;
const api_key='370335aec7bb5360d8c08f348cc2971b';
const Url='370335aec7bb5360d8c08f348cc2971b'
@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http:HttpClient
    ) { }
getDataMeteo1J(ville:any):Observable<any>{
return this.http.get(Url+ville+'&appid='+api_key);
}

getDataMeteo5J(ville:any):Observable<any>{
 return  this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ville+'&appid='+api_key);
  }
}
