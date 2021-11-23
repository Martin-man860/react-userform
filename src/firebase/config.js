import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyDd1VltRZ_e65brPVlX23OGPPV0QQNN9Fw",
  authDomain: "users-def19.firebaseapp.com",
  projectId: "users-def19",
  storageBucket: "users-def19.appspot.com",
  messagingSenderId: "985629806618",
  appId: "1:985629806618:web:592a603862ee34ec53c1a3",
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;