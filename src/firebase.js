import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA9KG-1eOz5JlygHd-gjVklzoOALCmyDT4",
  authDomain: "instagram-clone-a845f.firebaseapp.com",
  databaseURL: "https://instagram-clone-a845f.firebaseio.com",
  projectId: "instagram-clone-a845f",
  storageBucket: "instagram-clone-a845f.appspot.com",
  messagingSenderId: "966570692923",
  appId: "1:966570692923:web:493f181da8a17c529b671e",
  measurementId: "G-D6EC826868"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
