import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        signOut(auth)
            .then(() => { })
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            .then(() => { });
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
            .then(() => { })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signIn,
        logout,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;