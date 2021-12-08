/* eslint-disable no-unused-vars */
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
  onAuthStateChanged,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  query,
  onSnapshot,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';
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
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// funcion que crea la colecion de los usuarios
export const userData = async (idUser, nameUser) => {
  try {
    const docRef = await addDoc(collection(db, 'user-data'), {
      id: idUser,
      name: nameUser,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// funcion que registra usuarios
export const signup = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.hash = '#/login';
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      // ...
      userData(auth.currentUser.uid, name);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
};

// funcion que loguea usuarios con una cuenta registrada
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

// funcion que loguea usuarios con cuenta de google
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
    })
    .catch((error) => {
      // Handle Errors here.
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
    })
    .catch((error) => {
      // An error happened.
      console.log('Se taimó');
      // Sign-out successful.
    });
};

// funcion observador
export const onAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      // ...
    } else if (window.location.hash === '#/wall') {
      // User is signed out
      // ...
      signOutUser();
    }
  });
};

// funcion para crear coleccion de post
export const addDataPost = async (textPost) => {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      userName: auth.currentUser.displayName,
      userId: auth.currentUser.uid,
      userPost: textPost,
      likes: [],
      likesCounter: 0,
      datePost: Timestamp.fromDate(new Date()),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// funcion para publicar el post en pantalla
export const printPost = (nameCollection, callback) => {
  const q = query(collection(db, nameCollection), orderBy('datePost', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((_doc) => {
      posts.push({ ..._doc.data(), id: _doc.id });
    });
    callback(posts);
  });
};
