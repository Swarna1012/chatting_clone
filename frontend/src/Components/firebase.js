import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDFpVFRF0XPQ_ihEyxzCk1TeL4E0DPKvQU",
    authDomain: "chatting-efe83.firebaseapp.com",
    projectId: "chatting-efe83",
    storageBucket: "chatting-efe83.appspot.com",
    messagingSenderId: "161984148293",
    appId: "1:161984148293:web:dd6f7927a480a15556042c"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };