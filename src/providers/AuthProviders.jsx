import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firbase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registerUserWithEmailAndPassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    const logInUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    } , [])

    const authInfo = {
        user,
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