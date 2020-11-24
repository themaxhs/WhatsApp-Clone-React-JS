import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAezTIIm2Rk4GsHksQrnlZ2b9axuHIY84c",
    authDomain: "watsapp-clone-f7b71.firebaseapp.com",
    databaseURL: "https://watsapp-clone-f7b71.firebaseio.com",
    projectId: "watsapp-clone-f7b71",
    storageBucket: "watsapp-clone-f7b71.appspot.com",
    messagingSenderId: "271526023260",
    appId: "1:271526023260:web:31e05a804d465143d9d699",
    measurementId: "G-VWNX95W7QD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;