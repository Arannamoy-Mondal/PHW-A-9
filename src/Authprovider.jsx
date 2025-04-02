import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import auth from './Firebase.config';
import { redirect, useNavigate } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [er, setEr] = useState(null)
    const [ok, setOk] = useState(null)
    const [data, setData] = useState(null)
    // const Navigate=useNavigate()
    useEffect(() => {
        setEr(null)
        setOk(null)
        fetch("../data.json")
            .then(res => res.json())
            .then(res => setData(res))
            .catch(er => {
                console.log("Authprovider error: ", er.message);
            })
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setUser(user)
                setLoading(false)
                // ...
            } else {
                // User is signed out
                // ...
                setLoading(false)
                setUser(null)
            }
        });

        return () => {
            unsubscribe()
        }
    }, [])



    const googleProvider = new GoogleAuthProvider();
    const googleAuthentication = (e) => {
        e.preventDefault()
        setLoading(true)
        setEr(null)
        setOk(null)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // Navigate("/")
                // console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                setEr(errorMessage)
            });
    }

    const createAccount = (e, email, password) => {
        e.preventDefault()
        setEr(null)
        setOk(null)
        // setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // <Navigate to="/profile"></Navigate>
                // Navigate("/")
                setOk("Account created successfully. Please login.")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setEr(errorMessage)
            });
    }

    const logOut = () => {
        setEr(null)
        setOk(null)
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            // Navigate("/")
        }).catch((error) => {
            // An error happened.
            setEr(error.message)
        });

    }

    const forgetPassword = (email) => {
        setEr(null)
        setOk(null)
        setLoading(true)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                // Navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    const login = (email, password) => {
        setEr(null)
        setOk(null)
        setLoading(true)    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // setLoading(false)
                // Navigate("/")
                // ...
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setEr(errorMessage)
                // console.log(errorMessage);
                
            });
    }


    const updateNamePhoto = (userName, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: photo
        })
    }

    const updatemail = (newEmail, currentEmail) => {
        return updateEmail(auth.currentUser, newEmail)
    }

    const updatePass = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword)
    }
    const authInfo = {
        user, googleAuthentication, loading,
        logOut, createAccount, er, setEr, ok, setOk,
        forgetPassword, login, data, updateNamePhoto, updatemail,updatePass
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;