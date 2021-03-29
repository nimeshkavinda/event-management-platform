import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyB0neG3VV1ihoP_yvpqNXLYbIYL_AbJ-Fk",
  authDomain: "foss-rsvp.firebaseapp.com",
  projectId: "foss-rsvp",
  storageBucket: "foss-rsvp.appspot.com",
  messagingSenderId: "278353010401",
  appId: "1:278353010401:web:ec23f18fe9756c3576a1a0",
  measurementId: "G-JJERQ8Q5V2",
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
// const usersCollection = db.collection("users");
const eventsCollection = db.collection("events");

// export utils/refs
export {
  db,
  auth,
//   usersCollection,
  eventsCollection,
};
