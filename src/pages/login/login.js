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
import { NavController, ToastController, NavParams } from 'ionic-angular';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.data = {
            perfil: '',
            email: '',
            password: ''
        };
        this.value = this.navParams.get('valor');
        this.loadPerfil();
    }
    LoginPage.prototype.loadPerfil = function () {
        switch (this.value) {
            case 1:
                this.data.perfil = 'Aficionado';
                break;
            case 2:
                this.data.perfil = 'Atleta';
                break;
            case 3:
                this.data.perfil = 'Tienda - Negocio';
                break;
            case 4:
                this.data.perfil = 'Gimnasio';
                break;
            case 5:
                this.data.perfil = 'Salud';
                break;
            case 6:
                this.data.perfil = 'Fotografo';
                break;
            default:
                this.data.perfil = '';
                break;
        }
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        alert('Presionaste el BOton');
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController,
            ToastController,
            NavParams])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map