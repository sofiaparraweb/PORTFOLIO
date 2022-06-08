// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvh3ioPuzQdE89Q_iUMdGu3L2N2LZDMIQ",
  authDomain: "portfolio-contactform-9de46.firebaseapp.com",
  projectId: "portfolio-contactform-9de46",
  storageBucket: "portfolio-contactform-9de46.appspot.com",
  messagingSenderId: "891150144975",
  appId: "1:891150144975:web:62ea00f266f74d0853aeba",
  measurementId: "G-0SJTGEMKJM",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
