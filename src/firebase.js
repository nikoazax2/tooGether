import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyARftpIMyZcIuEc2gZP7JBWKxwlEwUuo60",
  authDomain: "toogether-370c8.firebaseapp.com",
  databaseURL: "https://toogether-370c8-default-rtdb.firebaseio.com",
  projectId: "toogether-370c8",
  storageBucket: "toogether-370c8.appspot.com",
  messagingSenderId: "744162930517",
  appId: "1:744162930517:web:e1ea6cf4b63a0bdddfc9dc"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}