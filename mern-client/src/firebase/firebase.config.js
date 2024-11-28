// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKKzKJkacVhVtyespwhFoPQ86BZGwC7MI",
  authDomain: "mern-book-inventory-b352b.firebaseapp.com",
  projectId: "mern-book-inventory-b352b",
  storageBucket: "mern-book-inventory-b352b.firebasestorage.app",
  messagingSenderId: "598262067579",
  appId: "1:598262067579:web:3b82530798b54b6af74dde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;