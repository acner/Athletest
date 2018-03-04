# Athletest
Proyecto de Prueba

npm install,
### Se utilizo angularfire2 y firestore.
### se autentica con firebase cloud firestore,
### metodo de inicio de sesion: email/password, seguridad ninguna.
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      // Allow requests from authenticated users
      //allow read, write: if request.auth != null;
      allow read, write
    }
  }
}

