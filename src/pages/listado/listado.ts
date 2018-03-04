import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ServiciosPage } from '../../providers/servicios';
/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 interface Usuarios {
 email: string,
 password: number,
 nombre?:string,
 perfil?:string
}

@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {
  	usuariosCollection: AngularFirestoreCollection<Usuarios>; //Firestore collection
	usuarios: Observable<Usuarios[]>; // read collection
	constructor(public navCtrl: NavController, private afs: AngularFirestore,public servicios:ServiciosPage) {

}


  ionViewWillEnter() {

   this.usuarios = this.servicios.getListado();
}

   delete(usuario:any) {

     this.servicios.delete(usuario);

  }
}
