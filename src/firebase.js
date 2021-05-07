// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBxYswZl4V4cSsr-J45-dCR-w5hSa3powc",
    authDomain: "clone-176f1.firebaseapp.com",
    projectId: "clone-176f1",
    storageBucket: "clone-176f1.appspot.com",
    messagingSenderId: "23142536885",
    appId: "1:23142536885:web:af76912af2246c345ed0fc",
    measurementId: "G-1JBG5XWQ1K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };