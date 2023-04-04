import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFL7rPPuWcjT4ZD_pWNlFC4lVz8kBa9Oc",
  authDomain: "quora-app-ed253.firebaseapp.com",
  projectId: "quora-app-ed253",
  storageBucket: "quora-app-ed253.appspot.com",
  messagingSenderId: "166602733198",
  appId: "1:166602733198:web:8c7c0e4faea9770484fbdf",
  measurementId: "G-4GY1PGFFHM"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebaseApp.firestore();
  
  export { auth, provider };
  export default db;
