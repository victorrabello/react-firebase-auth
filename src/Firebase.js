import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDhLOgaRbIjuh4MowFhMcKt8y9v-natab0",
  authDomain: "somativaweb.firebaseapp.com",
  projectId: "somativaweb",
  storageBucket: "somativaweb.appspot.com",
  messagingSenderId: "9309875492",
  appId: "1:9309875492:web:73a6abace4bff3fce457b1"
};

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;