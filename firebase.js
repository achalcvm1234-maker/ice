// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyDfhNi8g2Uj3i_ue5CQKmWNCd4gE9j6sjc",
  authDomain: "icecream-app-25aa6.firebaseapp.com",
  projectId: "icecream-app-25aa6",
  storageBucket: "icecream-app-25aa6.appspot.com",
  messagingSenderId: "127140381477",
  appId: "1:127140381477:web:f7108707c8cf5404fb90cc",
  measurementId: "G-WTXE2WXKRN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();