import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router:Router ,private serviceAuth:AuthentificationService) {

   
   }

  ngOnInit() {
   
  }
  Deconnecter(){
this.serviceAuth.deconnecter();
this.router.navigateByUrl('/authentification');

  }
 
  
}
