import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANpzXkhFaBFsUnFNQIwdlSY-MtqNIRy60",
    authDomain: "snapchat-clone-8725f.firebaseapp.com",
    projectId: "snapchat-clone-8725f",
    storageBucket: "snapchat-clone-8725f.appspot.com",
    messagingSenderId: "599796039716",
    appId: "1:599796039716:web:b5f1901c1166b3c2ec98b1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export  {db, auth, storage, provider};