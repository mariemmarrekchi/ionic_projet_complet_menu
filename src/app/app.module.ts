import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{Geolocation} from '@ionic-native/geolocation/ngx';
import {AgmCoreModule} from '@agm/core';
import {SQLite}  from'@ionic-native/sqlite/ngx';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcCCSotPD9GXxNLQz3teHZbi6XTKzazIg'
      }),
      AngularFireAuthModule,
 AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    Geolocation,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
