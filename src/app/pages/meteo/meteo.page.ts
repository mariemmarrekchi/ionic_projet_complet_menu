import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
ville:string="sfax";
meteo1j:any;
meteo5j:any;
  constructor(private servicemeteo:MeteoService) { }

  ngOnInit() {
    this.getData();
  }
getData(){
 this.servicemeteo.getDataMeteo1J(this.ville).subscribe(data=>{
    this.meteo1j=data;
    console.log(this.meteo1j);
  },error=>{
    console.log(error);
    
  }

);

 this.servicemeteo.getDataMeteo5J(this.ville).subscribe(data=>{
  this.meteo5j=data;
  console.log(this.meteo5j);
},error=>{
  console.log(error);
  
}

);
}
}
