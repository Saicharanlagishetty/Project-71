import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyC2ZqG4NKsvUq4yreZqKMGHQCpx7oXUf6Y",
  authDomain: "complaint-forum-d04de.firebaseapp.com",
  projectId: "complaint-forum-d04de",
  storageBucket: "complaint-forum-d04de.appspot.com",
  messagingSenderId: "1061977097268",
  appId: "1:1061977097268:web:b2a9fc4ca28c6208cb3661"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

