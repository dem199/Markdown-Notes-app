import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAts-B89B76f6q2DUhdnhNoyu_PWfbqDes",
  authDomain: "notes-app-9d105.firebaseapp.com",
  projectId: "notes-app-9d105",
  storageBucket: "notes-app-9d105.appspot.com",
  messagingSenderId: "690501533796",
  appId: "1:690501533796:web:62ef3c99e0783ddc3e5f71"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")


