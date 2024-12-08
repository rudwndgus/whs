import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJq-86_waj5Zc8PrLl-OWnAe5H6PYglHw",
  authDomain: "i-o-t-123df.firebaseapp.com",
  databaseURL: "https://i-o-t-123df-default-rtdb.firebaseio.com/", // Real-time Database URL
  projectId: "i-o-t-123df",
  storageBucket: "i-o-t-123df.firebasestorage.app",
  messagingSenderId: "281890673194",
  appId: "1:281890673194:web:f865888794e12e37a76953",
  measurementId: "G-H01MSRCYL5"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase 서비스 초기화
const database = getDatabase(app); // Realtime Database
const auth = getAuth(app); // Firebase Authentication (추가 옵션)

export { database, auth };
