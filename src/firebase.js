import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA3TrnjhxgbMR1l5Dvr8hyTlWmi1m0SI1s",
  authDomain: "chatapp-1f1e8.firebaseapp.com",
  projectId: "chatapp-1f1e8",
  storageBucket: "chatapp-1f1e8.appspot.com",
  messagingSenderId: "144204028464",
  appId: "1:144204028464:web:dc81c00cc2da37526dabf5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export default app