import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVWzDHxakB1YkeaBVAhXOeje6JNo8Ob6s",
  authDomain: "studio-9356365406-11a53.firebaseapp.com",
  projectId: "studio-9356365406-11a53",
  storageBucket: "studio-9356365406-11a53.firebasestorage.app",
  messagingSenderId: "495512062480",
  appId: "1:495512062480:web:42968018a0ca982b9ad895",
  measurementId: "G-8DDCW8WY5P"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
