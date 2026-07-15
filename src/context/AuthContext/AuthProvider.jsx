// import React from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth, db } from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUser({
            ...currentUser,
            ...docSnap.data(),
          });
        } else {
          setUser(currentUser);
        }
      } catch (error) {
        console.error(error);
        setUser(currentUser);
      }
    } else {
      setUser(null);
    }

    setLoading(false);
  });

  return () => unsubscribe();
}, []);

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut,

    }

    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;