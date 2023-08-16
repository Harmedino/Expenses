// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDadLjKCXfzDYkZHPMNn1s0FGNup6I9xFE",
  authDomain: "expense-app-4978b.firebaseapp.com",
  projectId: "expense-app-4978b",
  storageBucket: "expense-app-4978b.appspot.com",
  messagingSenderId: "316441528452",
  appId: "1:316441528452:web:c6a68c4f2375effe85dad1",
  measurementId: "G-PM4Y362CVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)