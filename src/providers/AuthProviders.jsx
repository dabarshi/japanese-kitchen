import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firbase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // sign-up function with email and password

    const registerUserWithEmailAndPassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user information 

    const updateUserInfo = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    // sign in with email and password

    const logInUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sign in with popup 

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // github sign-in

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // handle sign out

    const logOut = () => {
        return signOut(auth);
    }

    // handle auth state change 
    // Observe if user logged in or out

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    } , [])

    // context api values

    const authInfo = {
        user,
        loading,
        registerUserWithEmailAndPassword,
        updateUserInfo,
        logInUserWithEmailAndPassword,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;