import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
      },
       {
    path: 'endroit-details',
    loadChildren: () => import('../../pages/endroit-details/endroit-details.module').then( m => m.EndroitDetailsPageModule)
  },
      {
        path: 'endroit-nouveau',
        loadChildren: () => import('../../pages/endroit-nouveau/endroit-nouveau.module').then( m => m.EndroitNouveauPageModule)
      },
       
      {
        path: 'meteo',
        loadChildren: () => import('../../pages/meteo/meteo.module').then( m => m.MeteoPageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../../pages/contacts/contacts.module').then( m => m.ContactsPageModule)
      },
      {
        path: 'galerie',
        loadChildren: () => import('../../pages/galerie/galerie.module').then( m => m.GaleriePageModule)
      },
      {
        path: 'endroits',
        loadChildren: () => import('../../pages/endroits/endroits.module').then( m => m.EndroitsPageModule)
      },
      {
        path: 'pays',
        loadChildren: () => import('../../pages/pays/pays.module').then( m => m.PaysPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
