import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const config = {
    apiKey: "AIzaSyBbUzQ6gZFy00B8KyW3k5O6EiCLIDc0XDQ",
    authDomain: "instagram-clone-b21f0.firebaseapp.com",
    projectId: "instagram-clone-b21f0",
    storageBucket: "instagram-clone-b21f0.appspot.com",
    messagingSenderId: "975687551684",
    appId: "1:975687551684:web:8510a8d2af4ca6e3ddd791"
};
const fireBase = Firebase.initializeApp(config);
const FieldValue = Firebase.firestore;








export {fireBase, FieldValue};