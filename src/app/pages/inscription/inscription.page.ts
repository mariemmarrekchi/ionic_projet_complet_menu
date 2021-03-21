import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private router:Router,private serviceAut:AuthentificationService,private alert:AlertController) { }

  ngOnInit() {
  }
  onGoAuth(value:any){
    this.router.navigateByUrl('/authentification');
  }
  //async
   onCrerUtilisateur(value: any){
//     if (!this.serviceAut.creerNouvelUtilisateur(value.email, value.pass)) {
//      const alertDialog=this.alert.create({
//        header:"Vérifier",message:"Email ou mot de passe vide "
//      });
//      (await alertDialog).present();
//   }else{
// this.router.navigateByUrl("menu/home");
//   }

this.serviceAut.creerNouvelUtilisateur(value.email, value.pass)
 .then(res => {
 console.log(res);
 this.router.navigateByUrl('/menu/home');
 }, async err => {
 console.log(err);
 const alertDialog=this.alert.create({
          header:"Vérifier",message:"Email ou mot de passe vide "
        });
        (await alertDialog).present();
 });
 }
}
