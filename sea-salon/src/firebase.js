// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCf3d_igRAFXEa7fx-Yk9vzmkqmvceP80U",
  authDomain: "sea-salon-b7e9f.firebaseapp.com",
  projectId: "sea-salon-b7e9f",
  storageBucket: "sea-salon-b7e9f.appspot.com",
  messagingSenderId: "540297992110",
  appId: "1:540297992110:web:bdb182614cd0d439e75a3f",
  measurementId: "G-JNX8F02H4Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, doc, setDoc, getDoc };