import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBwAS7tvkunwF-zZzsNdJ-r0l0uJI3ALY4",
  authDomain: "allison-clothing-db.firebaseapp.com",
  databaseURL: "https://allison-clothing-db.firebaseio.com",
  projectId: "allison-clothing-db",
  storageBucket: "allison-clothing-db.appspot.com",
  messagingSenderId: "1050196125501",
  appId: "1:1050196125501:web:a8f04c645d43bbbef74754",
  measurementId: "G-6HWQ5HG5PH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;