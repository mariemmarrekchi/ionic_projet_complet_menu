import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GallerieService } from 'src/app/services/gallerie.service';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.page.html',
  styleUrls: ['./galerie.page.scss'],
})
export class GaleriePage implements OnInit {
 public motCle:String;
 public PageActuelle = 1;
 public ImagesParPage = 10;
 private dataImages = [] as any;
 public totalPages: number;

  constructor(private gallerie:GallerieService,private Alert:AlertController) { }

  ngOnInit() { 
this.chargerImage()
  }
  chargerImage(){
    this.chargerImageSuivante();
    
  }

   chargerImageSuivante  (){
    const hits='hits'
    const totalHits='totalHits';
    this.gallerie.chargerImage(this.motCle,this.PageActuelle,this.ImagesParPage).subscribe(async data=>{
      data[hits].forEach(element => {
        this.dataImages.push(element);
      });
this.totalPages=data[totalHits]/this.ImagesParPage;
console.log(this.totalPages);
if( this.totalPages==0

){
  const al=this.Alert.create({
    header:"Erreur",message:"Votre Mot de Recherche n'exsite pas",  buttons: ['Ok']
  });

 (await al).present();
}
    }),
    error=>{
      console.log(error);
    };
  
    

  }

  pageSuivante(event) {
    console.log(this.totalPages);
    if (this.PageActuelle < this.totalPages) {
    console.log(this.PageActuelle);
    this.PageActuelle++;
    this.chargerImageSuivante();
    event.target.complete();
    } else {
    event.target.disabled = true;
    }
    }  
    
  resetImages(){
   
    this.dataImages=[];
  }
}
