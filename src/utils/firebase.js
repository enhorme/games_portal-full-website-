import { initializeApp } from "firebase/app";
import {
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

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

export const createDocument = async (data, gameId) => {
  if (auth.currentUser?.uid) {
    await setDoc(
      doc(firestoreDB, `users/${auth.currentUser.uid}/games/${gameId}`),
      data
    );
  }
};

export const deleteDocument = async (gameId) => {
  if (auth.currentUser?.uid) {
    await deleteDoc(
      doc(firestoreDB, `users/${auth.currentUser.uid}/games/${gameId}`)
    );
  }
};

export const updateRatingFavorite = async (gameId, rating) => {
  if (auth.currentUser?.uid) {
    await updateDoc(
      doc(firestoreDB, `users/${auth.currentUser.uid}/games/${gameId}`),
      {
        rating: rating,
      }
    );
  }
};
export const logoutUser = () => {
  signOut(auth)
    .then(() => console.log("success"))
    .catch((e) => console.log(e.message));
};
export default firebase;
