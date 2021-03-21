import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http:HttpClient){ }
  getPaysInfo(pays: string):Observable<any> {
   return   this.http.get('https://restcountries.eu/rest/v2/name/'+pays);
  }
}
