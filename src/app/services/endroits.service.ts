import { Injectable } from '@angular/core';
import {Endroit} from '../model/endroit.model';
import { Storage } from '@ionic/storage';

@Injectable({
providedIn: 'root'
})
export class EndroitsService {
private locations: Array<Endroit> = [];
constructor(private storage: Storage) {
this.locations.push({title: 'A'});
this.locations.push({title: 'B'});
this.locations.push({title: 'C'});
}
    public getLocations() {
    // get permet de récupérer le contenu de l'attribut du localstorage
    return this.storage.get('locations').then(data => {
    this.locations = data != null ? data : []; // opérateur ternaire
    return this.locations.slice();
   });
   }

   public addLocation(endroit: Endroit) {
    this.locations.push(endroit);
    // set permet d'ajouter un attribut au storage
    this.storage.set('locations', this.locations);
   }
   public currentLocation: Endroit;
   
   public updateLocations(locations) {
    this.storage.set('locations', locations);
    }
    addPhoto(base64Image: string, timestamp: number) {
        // tslint:disable-next-line:prefer-for-of
        for ( let i = 0; i < this.locations.length ; i++) {
         if (this.locations[i].timestamp === timestamp){
         this.locations[i].photos.push(base64Image);
         this.updateLocations(this.locations);
         break;
         }
        }
        }
   }