"use client";
import { useState, useEffect } from "react";
import app from "../../lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((newUser) => {
            if (newUser) {
               router.push("/mainPageContainer"); 
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [router]);

    const signInWithGoogle = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google: ", error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundImage: `url('/img5.jpg')`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',  
        backgroundPosition: 'center'}}>
            {user ? (
                <p>Loading...</p>
            ) : (
                <button
                    onClick={signInWithGoogle}
                    className="flex items-center bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                >
                    <FcGoogle className="mr-2" size={24} />
                    Sign in with Google
                </button>
            )}
        </div>
    );
};

export default Login;
