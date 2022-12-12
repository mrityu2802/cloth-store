import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD21KZ0FWI-n2Tnj-sY1QsrcwrKs3kDfnE",
  authDomain: "crwn-db-f494e.firebaseapp.com",
  projectId: "crwn-db-f494e",
  storageBucket: "crwn-db-f494e.appspot.com",
  messagingSenderId: "43775044380",
  appId: "1:43775044380:web:33a4525ecb2493951d28d9",
  measurementId: "G-EMYPKY5F8Q",
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;