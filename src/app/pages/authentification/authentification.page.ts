import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
public email=""
  constructor(private router:Router,private serviceAuth:AuthentificationService,private alert:AlertController) { }

  ngOnInit() {
    this.email=this.serviceAuth.getIdFromLocalStorage();
  }
  //async
   register(value:any){
//     if(this.serviceAuth.connecter(value.email,value.pass)){
// this.router.navigateByUrl("menu/home");}
// else{
// const alertDialog=this.alert.create({
//   header:"Vérifier",message:"votre email ou password"
// });
// (await alertDialog).present();
// }

this.serviceAuth.connecter(value.email, value.pass)
.then(res => {
console.log(res);
this.router.navigateByUrl('/menu/home');
}, async err => {
console.log(err.message);
const alertDialog=this.alert.create({
    header:"Vérifier",message:"votre email ou password"
  });
   (await alertDialog).present();
});

  }
  onGoSignUp(){
    this.router.navigateByUrl("/inscription");
  }
}
