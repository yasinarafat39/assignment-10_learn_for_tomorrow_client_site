import React, { useEffect } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';



const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // sign in with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Up with email and password
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Google 
    const singInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Sign in with Facebook
    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    // Sign in with GitHub 
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // Sign Out
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // Correction user Password
    const userPasswordCorrection = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }


    // Send Verification Email
    const verifyUser = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    // Update User Profile
    const manageUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    const authInfo = {
        user,
        signIn,
        setLoading,
        signUp,
        singInWithGoogle,
        signInWithGithub,
        userSignOut,
        signInWithFacebook,
        userPasswordCorrection,
        verifyUser,
        manageUserProfile,
        loading
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user inside state change", currentUser);
            setUser(currentUser);
            setLoading(false)
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