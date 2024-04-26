// Import the functions you need from the SDKs you needx
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseGoogleConfig } from "./google";

// getAuth() can be used any time after initialization
// Your web app's Firebase configuration
const firebaseConfig = firebaseGoogleConfig

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
