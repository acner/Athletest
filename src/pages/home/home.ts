import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';

export interface Slide {
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 slides: Slide[];
 showSkip = true;
  constructor(public navCtrl: NavController, public platform: Platform) {

  	  this.slides = [
        {
          title: "Bienvenido a la comunidad deportiva, la red social  <br> fitness !!",
          description: "El <b>Ionic Super Starter</b> es un starter de Ionic completo con muchas páginas preconstruidas y mejores prácticas.",
          image: 'assets/imgs/atheletearena_diamante.png',
        },
        {
          title: "Bienvenido a la comunidad deportiva, la red social  <br> fitness !!",
          description: "El <b>Ionic Super Starter</b> es un starter de Ionic completo con muchas páginas preconstruidas y mejores prácticas.",
          image: 'assets/imgs/atheletearena_diamante.png',
        },
        {
          title: "Bienvenido a la comunidad deportiva, la red social  <br> fitness !!",
          description: "El <b>Ionic Super Starter</b> es un starter de Ionic completo con muchas páginas preconstruidas y mejores prácticas.",
          image: 'assets/imgs/atheletearena_diamante.png',
        }
        ];

  }

  showPerfil(){
    this.navCtrl.setRoot(PerfilPage, {}, {
        animate: true,
        direction: 'forward'
      });
  }

  showLogin(){
        this.navCtrl.setRoot(LoginPage, {}, {
        animate: true,
        direction: 'forward'
      });
  }

      onSlideChangeStart(slider) {
      this.showSkip = !slider.isEnd();
    }


}
