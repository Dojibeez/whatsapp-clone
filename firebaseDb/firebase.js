import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCrK07tz60A8CIbZVwR7Gzk9byJEMBjCsA",
    authDomain: "whatsapp-clone-e30b0.firebaseapp.com",
    projectId: "whatsapp-clone-e30b0",
    storageBucket: "whatsapp-clone-e30b0.appspot.com",
    messagingSenderId: "128976761178",
    appId: "1:128976761178:web:3bba4c2e4ca816e9414363"
  };


const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };