import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private email = 'email';
  private password = 'password';
  private connecte="non";
  constructor(private AuthFire:AngularFireAuth) { }
  public creerNouvelUtilisateur(email: string, password: string) {
    //avec local storage
    // if (email !== '' && password !== '') {
    // localStorage.setItem(this.email, email);
    // localStorage.setItem(this.password, password);
    // localStorage.setItem(this.connecte,"oui");
    // return true;
    // } else {
    // return false;
    // }
//avec firebase
    return new Promise<any>((resolve, reject) => {
      this.AuthFire.createUserWithEmailAndPassword(email, password)
      .then(res => {
      resolve(res);
      localStorage.setItem(this.email, email);
      localStorage.setItem(this.connecte, 'oui');
      },
      err => reject(err));
      });
   }
   public connecter(email: string, password: string) {
    // const email2 = localStorage.getItem(this.email);
    // console.log(email2);
    // const password2 = localStorage.getItem(this.password);
    // console.log(password2);
    // localStorage.setItem(this.connecte,"oui");
    // if (email === email2 && password === password2) {
    // return true;
    // } else {
    // return false;
    // }

    return new Promise<any>((resolve, reject) => {
      this.AuthFire.signInWithEmailAndPassword(email, password)
      .then(res => {
      resolve(res);
      localStorage.setItem(this.email, email);
      localStorage.setItem(this.connecte, 'oui');
      },
      err => reject(err));
      });
     
   }
   public getConnecte(){
     return localStorage.getItem(this.connecte);
   }
   public deconnecter() {
    //  console.log(String(localStorage.getItem(this.connecte)));
    // const conect= localStorage.setItem(this.connecte, 'non');
    //return conect;
    return new Promise<any>((resolve, reject) => {
      if (this.AuthFire.currentUser) {
      this.AuthFire.signOut()
      .then(res => {
      console.log('Déconnexion');
      localStorage.setItem(this.connecte, 'non');
      resolve();
      },
      err => reject(err));
      }
      });


   }
   
   public getIdFromLocalStorage() {
    const s = localStorage.getItem(this.email);
    if (s !== null) {
      console.log(s);
    return s;
    }
    return '';
   } 
}
