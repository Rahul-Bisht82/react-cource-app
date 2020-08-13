import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCwFL8IUIXVCHgD2vYCC7iOcFgYsIdgG0M",
  authDomain: "react-app-8c0d7.firebaseapp.com",
  databaseURL: "https://react-app-8c0d7.firebaseio.com",
  projectId: "react-app-8c0d7",
  storageBucket: "react-app-8c0d7.appspot.com",
  messagingSenderId: "295129915031",
  appId: "1:295129915031:web:6b6215b6a177b70cee13d2",
  measurementId: "G-MXX0WZKJDB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
