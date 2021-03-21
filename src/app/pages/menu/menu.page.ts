import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public selectedIndex = 0;

  public pages = [
    {titre: 'Accueil', url: '/menu/home', icone: 'home'},
    {titre: 'Meteo', url: '/menu/meteo', icone: 'thermometer'},
    {titre: 'Galerie', url: '/menu/galerie', icone: 'images'},
    {titre: 'Endroits', url: '/menu/endroits', icone: 'navigate'},
    {titre: 'Pays', url: '/menu/pays', icone: 'airplane'},
    {titre: 'Contacts', url: '/menu/contacts', icone: 'person-add'},
    {titre: 'Déconnexion', url: 'deconnexion', icone: 'log-out'}
   ];
   
  constructor(private serviceAuth:AuthentificationService,private route:Router) { }

  ngOnInit() { const path = window.location.pathname.split('folder/')[1];
  if (path !== undefined) {
    this.selectedIndex = this.pages.findIndex(page => page.titre.toLowerCase() === path.toLowerCase());
  }
  }
  private _email = this.serviceAuth.getIdFromLocalStorage();
  public get email() {
    return this._email;
  }
  public set email(value) {
    this._email = value;
  }
  deconncter(p){
    if (p.url=="deconnexion"){
      this.serviceAuth.deconnecter();
      this.route.navigateByUrl('/authentification');
    }
  }
}
