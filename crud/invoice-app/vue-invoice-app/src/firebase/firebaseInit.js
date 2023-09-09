import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD7KtZPQKW8o-AoNiCVSltl5HP3l5xROEk",
  authDomain: "vue-crud-c38c5.firebaseapp.com",
  projectId: "vue-crud-c38c5",
  storageBucket: "vue-crud-c38c5.appspot.com",
  messagingSenderId: "1071161023447",
  appId: "1:1071161023447:web:f35c2bc89732e257b78992",
  measurementId: "G-457Q50Z862"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
