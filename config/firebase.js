// Import the functions you need from the SDKs you needx
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// getAuth() can be used any time after initialization


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




let app, auth;

console.log(getApps().length)

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}

export const db = getFirestore(app);
export const  tripsRef = collection(db, 'trips')
export const  expenseRef = collection(db, 'expense')

export {app, auth}
