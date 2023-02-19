import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlLJkWc0Ypu6YLRRzkwZnABgmrtrMrJv4',
  authDomain: 'chatbox-e0bf8.firebaseapp.com',
  databaseURL: 'https://chatbox-e0bf8-default-rtdb.firebaseio.com',
  projectId: 'chatbox-e0bf8',
  storageBucket: 'chatbox-e0bf8.appspot.com',
  messagingSenderId: '830959153244',
  appId: '1:830959153244:web:f572797623f0a3dfad3699',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
