import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALRCLRf_xxjXpnTdg3jdOSwnFzIXZye4E",
  authDomain: "crwn-clothing-iso.firebaseapp.com",
  projectId: "crwn-clothing-iso",
  storageBucket: "crwn-clothing-iso.appspot.com",
  messagingSenderId: "480032408143",
  appId: "1:480032408143:web:5f831dd7af7f9555a2e03a",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();
