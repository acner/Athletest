import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ServiciosPage } from '../providers/servicios';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { ListadoPage } from '../pages/listado/listado';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';


const config = {
   apiKey: "AIzaSyCQFiyk4pklrmqIbO48zzh3isOsTGTgaZ0",
   authDomain: "athleteareana.firebaseapp.com",
   databaseURL: "https://athleteareana.firebaseio.com",
   projectId: "athleteareana",
   storageBucket: "athleteareana.appspot.com",
   messagingSenderId: "556370301780"
 };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    LoginPage,
    ListadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence() //.enablePersistence() used for offline storage

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    LoginPage,
    ListadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    ServiciosPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
