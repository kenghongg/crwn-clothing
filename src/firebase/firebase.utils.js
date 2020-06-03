import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBZdr05SL_2uJSxTlVNqVSXgPvnASYeUSA",
  authDomain: "crwn-db-a9f44.firebaseapp.com",
  databaseURL: "https://crwn-db-a9f44.firebaseio.com",
  projectId: "crwn-db-a9f44",
  storageBucket: "crwn-db-a9f44.appspot.com",
  messagingSenderId: "286912584509",
  appId: "1:286912584509:web:61906db64902193a8a8354",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;

  // console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
