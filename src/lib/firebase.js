/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJIx10MsFqnaN2Wb1eLX2glPtEqWSYDEo',
  authDomain: 'estudiando-scl018socialnetwork.firebaseapp.com',
  projectId: 'estudiando-scl018socialnetwork',
  storageBucket: 'estudiando-scl018socialnetwork.appspot.com',
  messagingSenderId: '154683329378',
  appId: '1:154683329378:web:99bb8deb789b5249583a3b',
  measurementId: 'G-9C4WEJXEDV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signup = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      window.location.hash = '#/login';
      const user = userCredential.user;
/*       updateProfile(auth.currentUser, {
        displayName: name, */
      });
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
};

// Login
export const login = (email, password) => {
  if (email === '' || password === '') {
    alert('Email o contraseña no ingresados');
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        window.location.hash = '#/wall';
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Pajarón');
      });
  }
};

// Login con Google
export const googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/wall';
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};

// Singout (Cierre sesión)
export const signOutUser = () => {
  signOut(auth)
    .then(() => {
    // Sign-out successful.
      window.location.hash = '#/login';
    }).catch((error) => {
    // An error happened.
    console.log('Se taimó');
    });
};
