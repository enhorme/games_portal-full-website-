import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1wX8OWeAFm5J_UUQmCfjnpMkMzBMuJb0",
  authDomain: "games-portal-7d4b2.firebaseapp.com",
  projectId: "games-portal-7d4b2",
  storageBucket: "games-portal-7d4b2.appspot.com",
  messagingSenderId: "772066089070",
  appId: "1:772066089070:web:7dd58f8c83a10cbcae2e7f",
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const firestoreDB = getFirestore(firebase);

export default firebase;
