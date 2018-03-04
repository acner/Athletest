import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


 @Component({
   selector: 'page-perfil',
   templateUrl: 'perfil.html'
 })
 export class PerfilPage {

   constructor(public navCtrl: NavController) { console.log('Entro en Profiles')}


   showRegistrar(valor){

     console.log("Valor Click",valor);

     this.navCtrl.setRoot(LoginPage, {valor:valor}, {
       animate: true,
       direction: 'forward'
     });
   }

   login() {
     this.navCtrl.push(LoginPage);
   }

   signup() {
     this.navCtrl.push(LoginPage);
   }
 }
