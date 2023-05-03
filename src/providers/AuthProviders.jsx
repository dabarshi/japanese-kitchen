import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firbase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    const registerUserWithEmailAndPassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
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
        logInUserWithEmailAndPassword,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;