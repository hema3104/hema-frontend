import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase_api';

const provider = new GoogleAuthProvider();

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showEmailForm, setShowEmailForm] = useState(false); // State to toggle email form

    const signUpHandler = async () => {
        if (!name || !email || !password) return;
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: name });
            console.log(user);
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    const handleGoogleClick = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Signed in user:", user);
        } catch (error) {
            console.error("Error signing in with Google:", error);
            alert("Failed to sign in with Google. Please try again.");
        }
    };

    return (
        <main className="flex lg:h-[100vh]">
            <div className='w-[40%] bg-cover bg-left-top hidden lg:block' style={{ backgroundImage: "url('/login.jpg')" }}></div>
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center bg-dark-blue">
                <div className="p-8 w-[600px] bg-blue-900 rounded-lg shadow-lg">
                    <p className="text-white text-lg mb-12">Journey to a million miles starts from here!!</p>
                    <h1 className="text-6xl font-semibold text-white">Sign Up</h1>
                    <p className="mt-4 text-white">Choose a sign-up method</p>
                    <div className="flex flex-col mt-4 space-y-4">
                        <button
                            onClick={handleGoogleClick}
                            className="flex items-center justify-center w-full py-2 px-4 border rounded text-white"
                        >
                            <FcGoogle size={22} />
                            <span className="ml-2">Sign Up with Google</span>
                        </button>
                        <button
                            onClick={() => setShowEmailForm(!showEmailForm)}
                            className={`w-full py-2 px-4 border rounded ${showEmailForm ? 'bg-white text-dark-blue' : 'text-white'}`}
                        >
                            Sign Up with Email
                        </button>
                    </div>
                    {showEmailForm && (
                        <form onSubmit={(e) => { e.preventDefault(); signUpHandler(); }} className="mt-10">
                            <div className="mb-4">
                                <label className="block text-white">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="on"
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                            >
                                Sign Up
                            </button>
                        </form>
                    )}
                    <p className="mt-6 ml-1 text-white">
                        Already a user?{" "}
                        <Link href="/login" className="underline hover:text-blue-300 cursor-pointer">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default RegisterForm;
