import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GallerieService {

  constructor(private http:HttpClient) { }
  chargerImage(motCle:String, PageActuelle: number, ImagesParPage: number):Observable<any>{
return this.http.get('https://pixabay.com/api/?key=19081806-df9e931782e13fce783d9d851&q='+motCle+'&per_page='+ImagesParPage +'&page='+PageActuelle)
  }

}
