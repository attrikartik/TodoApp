import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBsOuz63jpm8R8WcRjQ38yGH0-Rc8yMbd8",
    authDomain: "todoapp-291f4.firebaseapp.com",
    databaseURL: "https://todoapp-291f4.firebaseio.com",
    projectId: "todoapp-291f4",
    storageBucket: "todoapp-291f4.appspot.com",
    messagingSenderId: "551330369243",
    appId: "1:551330369243:web:1b2d505be73bda50c106fe",
    measurementId: "G-NH0CWKY69H"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref()
