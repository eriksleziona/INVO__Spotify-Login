import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "invo-spotify-login.firebaseapp.com",
  projectId: "invo-spotify-login",
  storageBucket: "invo-spotify-login.appspot.com",
  messagingSenderId: "256613368390",
  appId: "1:256613368390:web:2e2cfd6a4982af32710047",
};

const app = initializeApp(firebaseConfig);
