'use client';

import { useContext,createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from '@app/firebase';

{/* This component sets up the user authentication in the firebase --
  ---here I have used google sign in to create accounts*/}

const AuthContext = createContext();

export function userAuth() {
  return useContext(AuthContext);
}


export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)

    }
    
      const logOut = () => {
        return signOut(auth);
      };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
          });
        return () => unsubscribe();
    },[user]);

    
  return <AuthContext.Provider value={{user, googleSignIn, logOut}}> { !loading && children} </AuthContext.Provider>;
}


