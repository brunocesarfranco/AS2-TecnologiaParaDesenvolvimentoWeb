import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAXfQn9T-i5kn7OJTBCWIukm4BHIcIv2k",
    authDomain: "desenvolvimentoweb-pucpr.firebaseapp.com",
    projectId: "desenvolvimentoweb-pucpr",
    storageBucket: "desenvolvimentoweb-pucpr.appspot.com",
    messagingSenderId: "247789543440",
    appId: "1:247789543440:web:22280088401164290fea95"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export default firebase;