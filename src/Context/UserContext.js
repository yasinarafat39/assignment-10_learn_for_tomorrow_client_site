import React, { useEffect } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);

    // sign in with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Up with email and password
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Google 
    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // Sign in with GitHub 
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        user,
        signIn,
        signUp,
        singInWithGoogle,
        signInWithGithub
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user inside state change", currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;