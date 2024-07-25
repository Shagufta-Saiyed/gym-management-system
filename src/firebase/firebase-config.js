// Your web app's Firebase configuration

// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKkgiDLBqSP0LQz-0tMbvHGU0C_ucDAc0",
    authDomain: "gym-firebase-fa150.firebaseapp.com",
    projectId: "gym-firebase-fa150",
    storageBucket: "gym-firebase-fa150.appspot.com",
    messagingSenderId: "1022230040457",
    appId: "1:1022230040457:web:98edd211be8232bbc8db58"
  };
  
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
// const db = firebase.firestore();
const db = getFirestore(app)

export { auth, db };