import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
 @IonicPage()
 @Component({
   selector: 'page-profile',
   templateUrl: 'profile.html'
 })
 export class ProfilesPage {

   constructor(public navCtrl: NavController) { console.log('Entro en Profiles')}


   openRegister(valor){

     console.log("Valor Click",valor);

     this.navCtrl.setRoot('LoginPage', {valor:valor}, {
       animate: true,
       direction: 'forward'
     });
   }

   login() {
     this.navCtrl.push('LoginPage');
   }

   signup() {
     this.navCtrl.push('SignupPage');
   }
 }
