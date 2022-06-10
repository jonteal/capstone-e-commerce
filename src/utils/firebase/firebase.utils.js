import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVdVlwNZn8YJjNVq2dE4eYvp96SKNFE9g",
    authDomain: "e-commerce-demo-4c22e.firebaseapp.com",
    projectId: "e-commerce-demo-4c22e",
    storageBucket: "e-commerce-demo-4c22e.appspot.com",
    messagingSenderId: "570059775807",
    appId: "1:570059775807:web:06c918c4acc965f197fd8a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);