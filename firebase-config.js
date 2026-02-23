// Firebase configuration
// Puppet3D project credentials

const firebaseConfig = {
  apiKey: "AIzaSyDjTptpHh2WDybnk_W9iIWVwAt35pMgc9U",
  authDomain: "puppet3d-e1a90.firebaseapp.com",
  projectId: "puppet3d-e1a90",
  storageBucket: "puppet3d-e1a90.firebasestorage.app",
  messagingSenderId: "940958576173",
  appId: "1:940958576173:web:6c147e3b4413ad2bba52a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = firebase.auth();
const db = firebase.firestore();
