// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8wTyWlfcexmM62T_MSkuiFuQF0f1p6MQ",
  authDomain: "extensify-798bc.firebaseapp.com",
  projectId: "extensify-798bc",
  storageBucket: "extensify-798bc.appspot.com",
  messagingSenderId: "88004658517",
  appId: "1:88004658517:web:0d654661d129a10a4bdbdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export const auth = getAuth(app);

export const  tripsRef = collection(db, 'trips')
export const  expenseRed = collection(db, 'expense')


export default app;


