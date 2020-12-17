import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDtYe1fWAlUaNRO19AtwNUFj7BLdFVnlFg",
    authDomain: "react-ecommerce-6d4be.firebaseapp.com",
    projectId: "react-ecommerce-6d4be",
    storageBucket: "react-ecommerce-6d4be.appspot.com",
    messagingSenderId: "200335074155",
    appId: "1:200335074155:web:92b0f56e9ca971bb85622e"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;
