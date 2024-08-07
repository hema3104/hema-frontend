import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase_api';
import { useRouter } from 'next/router'; // Import useRouter for redirection

const provider = new GoogleAuthProvider();

const LoginForm = () => {
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [googleClicked, setGoogleClicked] = useState(false);
    const [emailClicked, setEmailClicked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Initialize useRouter

    const handleGoogleClick = async () => {
        setGoogleClicked(true);
        setEmailClicked(false);
        setShowEmailForm(false); // Hide email form if shown

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Google Sign-In User:", user);
            // Redirect to homepage after successful sign-in
            router.push('/');
        } catch (error) {
            console.error("Error signing in with Google:", error);
            alert("Failed to sign in with Google. Please try again.");
        }
    };

    const handleEmailClick = () => {
        setEmailClicked(true);
        setGoogleClicked(false);
        setShowEmailForm(true);
    };

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Email Sign-In User:", user);
            // Redirect to homepage after successful sign-in
            router.push('/');
        } catch (error) {
            console.error("Error signing in with email:", error);
            alert("Failed to sign in with email. Please check your credentials and try again.");
        }
    };

    return (
        <main className="flex lg:h-[100vh]">
            <div className='w-[40%] bg-cover bg-left-top hidden lg:block' style={{backgroundImage: "url('/login.jpg')"}}></div>
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center bg-dark-blue">
                <div className="p-8 w-[600px] bg-blue-900 rounded-lg shadow-lg">
                    <p className="text-white text-lg mb-12">Journey to a million miles starts from here!!</p>
                    <h1 className="text-6xl font-semibold text-white">Login</h1>
                    <p className="mt-4 text-white">Choose a login method</p>
                    <div className="flex flex-col mt-4 space-y-4">
                        <button 
                            onClick={handleGoogleClick}
                            className={`flex items-center justify-center w-full py-2 px-4 border rounded ${googleClicked ? 'bg-white text-dark-blue' : 'text-white'}`}
                        >
                            <FcGoogle size={22} />
                            <span className="ml-2">Login with Google</span>
                        </button>
                        <button 
                            onClick={handleEmailClick}
                            className={`w-full py-2 px-4 border rounded ${emailClicked ? 'bg-white text-dark-blue' : 'text-white'}`}
                        >
                            Login with Email
                        </button>
                    </div>
                    {showEmailForm && (
                        <form className="mt-4" onSubmit={handleEmailLogin}>
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
                                Login
                            </button>
                        </form>
                    )}
                    <p className="mt-6 ml-1 text-white">
                        Don’t have an account?{" "} 
                        <Link href="/register" className="underline hover:text-blue-300 cursor-pointer">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default LoginForm;
