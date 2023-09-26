import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAi3fpCNvGDZxCj-sPw5GFX3ANae0x9f4",
  authDomain: "signin-cfca0.firebaseapp.com",
  projectId: "signin-cfca0",
  storageBucket: "signin-cfca0.appspot.com",
  messagingSenderId: "1072192831046",
  appId: "1:1072192831046:web:f577960e4f08e061159447",
  measurementId: "G-RLQ8VME7Z7"

};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};
