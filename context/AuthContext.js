import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import axios from 'axios'; 

const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const {user, setUser} = useState(null)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const userData = {
                    uid: result.user.uid,
                    email: result.user.email,
                    loginAt: new Date().toISOString()
                };
                axios.post('/api/loginRecords', userData)
                    .then(response => console.log('Login record saved', response))
                    .catch(error => console.error('Failed to record login', error));
            }).catch(error => {
                console.error('Login failed', error);
            });
    };



    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe();

    }, [user]);

    return(<AuthContext.Provider value={{user, googleSignIn, logOut}}>{children}</AuthContext.Provider>)
}


export const UserAuth = () => {
    return useContext(AuthContext)
}