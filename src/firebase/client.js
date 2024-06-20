import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjhuR22nSAGd7QujMA3xTh0qWDcxl9C5k",
  authDomain: "coderhouse---tienda-havanna.firebaseapp.com",
  projectId: "coderhouse---tienda-havanna",
  storageBucket: "coderhouse---tienda-havanna.appspot.com",
  messagingSenderId: "944233314159",
  appId: "1:944233314159:web:d0480b50fb5f74351ada9a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);