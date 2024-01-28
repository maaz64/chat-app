import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCrHT00ipKluIy3GSwygyf0JlojuNIcwY",
  authDomain: "chat-app-e42e4.firebaseapp.com",
  projectId: "chat-app-e42e4",
  storageBucket: "chat-app-e42e4.appspot.com",
  messagingSenderId: "974426538878",
  appId: "1:974426538878:web:dc9188ff77b5102a95e92f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

