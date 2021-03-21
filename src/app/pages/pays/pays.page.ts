import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.page.html',
  styleUrls: ['./pays.page.scss'],
})
export class PaysPage implements OnInit {
public pays:string;
paysaffiche: any;
  constructor(private paysservice:PaysService) { }

  ngOnInit() {
   this. PaysInfo();
  }
  PaysInfo(){
    this.paysservice.getPaysInfo(this.pays).subscribe(data=>{
      this.paysaffiche=data;
      console.log(data);
    },
    error=>{
      console.log(error);
    })
  
  }

}
