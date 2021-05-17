// src/firebaseConfig.js
import firebase from "firebase";
import store from "./store";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyARftpIMyZcIuEc2gZP7JBWKxwlEwUuo60",
    authDomain: "toogether-370c8.firebaseapp.com",
    databaseURL: "https://toogether-370c8-default-rtdb.firebaseio.com",
    projectId: "toogether-370c8",
    storageBucket: "toogether-370c8.appspot.com",
    messagingSenderId: "744162930517",
    appId: "1:744162930517:web:e1ea6cf4b63a0bdddfc9dc"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});