import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5lCUDhsTELgfh1Y610y6j03hHlhHpUzU",
  authDomain: "amondrex-fond.firebaseapp.com",
  projectId: "amondrex-fond",
  storageBucket: "amondrex-fond.appspot.com",
  messagingSenderId: "117694690956",
  appId: "1:117694690956:web:777aee89e214c8a2572da9",
  measurementId: "G-QJ56WLW4CE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
