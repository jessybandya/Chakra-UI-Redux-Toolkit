import { initializeApp } from 'firebase/app';
import { 
getAuth, 
createUserWithEmailAndPassword, 
updateProfile, 
onAuthStateChanged, 
signInWithEmailAndPassword, 
signOut 
} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuESJvjH4LE4K5CPZ391TYooh2axxjjJk",
    authDomain: "chakra-ui-redux-toolkit.firebaseapp.com",
    projectId: "chakra-ui-redux-toolkit",
    storageBucket: "chakra-ui-redux-toolkit.appspot.com",
    messagingSenderId: "804637159907",
    appId: "1:804637159907:web:013b4631a89893ac4930d6",
    measurementId: "G-V0SH8M384X"
  };
  initializeApp(firebaseConfig);

//init services
const auth = getAuth();

export {
auth,
createUserWithEmailAndPassword,
updateProfile,
onAuthStateChanged,
signInWithEmailAndPassword,
signOut
}