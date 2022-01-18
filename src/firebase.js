// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE-LriuDVKrK6tJi7d59-Q3gx1dqTBwWg",
  authDomain: "szbday2022restapi.firebaseapp.com",
  projectId: "szbday2022restapi",
  storageBucket: "szbday2022restapi.appspot.com",
  messagingSenderId: "831629152706",
  appId: "1:831629152706:web:7c878a552288653b9e065b",
  measurementId: "G-8KX2CX5TRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();