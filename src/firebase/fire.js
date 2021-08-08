import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDL29YnSI82p6IenOTrSP3q5zCoIwa7FHk",
  authDomain: "pet-home-e9f89.firebaseapp.com",
  projectId: "pet-home-e9f89",
  storageBucket: "pet-home-e9f89.appspot.com",
  messagingSenderId: "85634544208",
  appId: "1:85634544208:web:b81d2bc6562924aace9755",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
