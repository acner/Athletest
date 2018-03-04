import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';



interface UsuariosInterface {
email: string,
password: string,
nombre?:string,
perfil?:string
}


@Injectable()

export class ServiciosPage {
	usuariosCol:any;

	constructor(public afs:AngularFirestore){

		this.usuariosCol = this.afs.collection<UsuariosInterface>('usuarios')


	}


	add(email:string,password:string,perfil:string,callback:any){


		this.usuariosCol.add(
			{
				email:email,
				password:password,
				nombre:'',
				perfil:perfil
			}).then((datos)=>{
				this.usuariosCol.doc(datos.id).update({
					usuario_id:datos.id
				})
				callback();
			}).catch(e=>console.log('Error'+e))

	}

	delete(usuario:any){
		this.usuariosCol.doc(usuario.usuario_id).delete().then(()=>{
			console.log('Eliminado correctamente');
		})

	}


	getListado(){
   
	   this.usuariosCol = this.afs.collection('usuarios'); //ref()
	    return this.usuariosCol.valueChanges()

	}
}