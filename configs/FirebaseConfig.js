// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvDEzWJpkPoJkhYvMrMo7hq5_jxEtQ2qw",
  authDomain: "shortifyai-2e1d2.firebaseapp.com",
  projectId: "shortifyai-2e1d2",
  storageBucket: "shortifyai-2e1d2.firebasestorage.app",
  messagingSenderId: "492567790497",
  appId: "1:492567790497:web:b7fb4962445d8156b9c1e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage =  getStorage(app);