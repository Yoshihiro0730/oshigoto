import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRqlxGO6CO7e-cQaccnqnMPJltD4LFVIc",
    authDomain: "oshigoto-66ba4.firebaseapp.com",
    databaseURL: "https://oshigoto-66ba4-default-rtdb.firebaseio.com",
    projectId: "oshigoto-66ba4",
    storageBucket: "oshigoto-66ba4.firebasestorage.app",
    messagingSenderId: "683106688226",
    appId: "1:683106688226:web:d8ca4132ec0710cfe612bb"
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
