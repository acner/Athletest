import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController,NavParams } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  private value:any;
  private profile:any;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public navParams:NavParams) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
    

    this.value = this.navParams.get('valor');

    this.loadProfile();
    console.log('Valor Resultado: ',this.value);
  }

  loadProfile(){

    console.log('entro aca',this.value)
    
    switch (this.value) {
      case 1:
      this.profile = 'Aficionado'
      console.log(this.profile);
      break;
      case 2:
      this.profile = 'Atleta'
      console.log(this.profile);
      break;
      case 3:
      this.profile = 'Tienda - Negocio'
      break;
      case 4:
      this.profile = 'Gimnasio'
      break;
      case 5:
      this.profile = 'Salud'
      break;
      case 6:
      this.profile = 'Fotografo'
      break;
      default:
      this.profile =''
      break;
    }
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
