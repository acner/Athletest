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
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Entro en Profiles');
    }
    PerfilPage.prototype.showRegistrar = function (valor) {
        console.log("Valor Click", valor);
        this.navCtrl.setRoot(LoginPage, { valor: valor }, {
            animate: true,
            direction: 'forward'
        });
    };
    PerfilPage.prototype.login = function () {
        this.navCtrl.push(LoginPage);
    };
    PerfilPage.prototype.signup = function () {
        this.navCtrl.push(LoginPage);
    };
    PerfilPage = __decorate([
        Component({
            selector: 'page-perfil',
            templateUrl: 'perfil.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], PerfilPage);
    return PerfilPage;
}());
export { PerfilPage };
//# sourceMappingURL=perfil.js.map