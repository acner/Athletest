import { Component } from '@angular/core';
import { NavController, ToastController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };


  private value:any;
  private perfil:any;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams:NavParams) {


    

    this.value = this.navParams.get('valor');

    this.loadPerfil();
    console.log('Valor Resultado: ',this.value);
  }

  loadPerfil(){

    console.log('entro aca',this.value)
    
    switch (this.value) {
      case 1:
      this.perfil = 'Aficionado'
  
      break;
      case 2:
      this.perfil = 'Atleta'
  
      break;
      case 3:
      this.perfil = 'Tienda - Negocio'
      break;
      case 4:
      this.perfil = 'Gimnasio'
      break;
      case 5:
      this.perfil = 'Salud'
      break;
      case 6:
      this.perfil = 'Fotografo'
      break;
      default:
      this.perfil =''
      break;
    }
  }

  // Attempt to login in through our User service
  doLogin() {
    alert('Presionaste el BOton');
  }
}
