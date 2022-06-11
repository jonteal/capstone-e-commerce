import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

// firestore database instance
import {
    getFirestore,
    doc, // allows the ability to retrieve documents from the database
    getDoc, //gets the data on the document
    setDoc // sets the data on the document
} from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error createing the user', error.message);
        }
    }

    return userDocRef;
    
    // if user data does not exist
    // create /set the document with the data from userAuth in my collection

    // if user data exists
    // return
}