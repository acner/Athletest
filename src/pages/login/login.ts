import { Component } from '@angular/core';
import { NavController, ToastController,NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ServiciosPage } from '../../providers/servicios';
import { ListadoPage } from '../listado/listado';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public data: { email: string, password: string,nombre:string,perfil:string } = {
    email: '',
    password: '',
    nombre:'',
    perfil:''
  };


  private value:any;


  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams:NavParams,
    public servicios:ServiciosPage,
    public afAuth:AngularFireAuth) {


    

    this.value = this.navParams.get('valor');

    this.loadPerfil();


  }

  loadPerfil(){
    
    switch (this.value) {
      case 1:
      this.data.perfil = 'Aficionado'

  
      break;
      case 2:
      this.data.perfil = 'Atleta'
  
      break;
      case 3:
      this.data.perfil = 'Tienda - Negocio'
      break;
      case 4:
      this.data.perfil = 'Gimnasio'
      break;
      case 5:
      this.data.perfil = 'Salud'
      break;
      case 6:
      this.data.perfil = 'Fotografo'
      break;
      default:
      this.data.perfil =''
      break;
    }
  }

  loginRegistro(){

    return this.afAuth.auth.createUserWithEmailAndPassword(this.data.email,this.data.password)
    .then((usuario)=>{
      this.afAuth.auth.currentUser.updateProfile({displayName:'',photoURL:''});
    
        this.servicios.add(this.data.email,this.data.password,this.data.perfil,
          ()=>{
            this.navCtrl.setRoot(ListadoPage)
          }


          )

    }).catch((error)=>{
      alert (error.message);
      console.log(error);
    });




  }

}
