var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.showSkip = true;
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
    HomePage.prototype.showPerfil = function () {
        this.navCtrl.setRoot(PerfilPage, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    HomePage.prototype.showLogin = function () {
        this.navCtrl.setRoot(LoginPage, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    HomePage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Platform])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map