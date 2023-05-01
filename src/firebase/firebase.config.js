// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChRWnXPleV5Z2iuzfg3LSsD45UzxeyYcU",
  authDomain: "chef-recipe-hunter-f7444.firebaseapp.com",
  projectId: "chef-recipe-hunter-f7444",
  storageBucket: "chef-recipe-hunter-f7444.appspot.com",
  messagingSenderId: "342125581797",
  appId: "1:342125581797:web:4c15d1bfa4c137609c0b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;