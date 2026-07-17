

'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Brain, Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/aceternity/BackgroundGradient';
import { TextReveal } from '@/components/ui/aceternity/TextReveal';
import Link from 'next/link';
import { authService } from '@/lib/api/auth';

export default function LoginScreen() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        
        if (!email || !password) {
            setError('Please enter both email and password');
            setIsLoading(false);
            return;
        }

        try {
            // Check for specific email/password combinations
            if (email === 'metacuramycare@gmail.com' && password === 'metacura123') {
                // Patient login - redirect to patient dashboard
                await authService.login({
                    email,
                    password,
                    rememberMe: true,
                    enterprise_id: 'patient'
                });
                router.push('/dashboardmetacura');
            } else if (email === 'metacuradoctor@gmail.com' && password === 'metacura456') {
                // Doctor login - redirect to doctor dashboard
                await authService.login({
                    email,
                    password,
                    rememberMe: true,
                    enterprise_id: 'doctor'
                });
                router.push('/doctor/doc-dashboard');
            } else {
                // Invalid credentials
                setError('Invalid email or password. Please try again.');
                setIsLoading(false);
                return;
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/images/webmetacura/metacura splash screen.png')"
                }}
            />

            {/* Login Form Container */}
            <div className="w-full max-w-md relative z-10">
                                 <h1 className="text-[#9577CA] text-3xl font-bold text-center mb-6 mt-0">
                     Login
                 </h1>
                <form
                    onSubmit={handleLogin}
                    className="p-8 rounded-2xl space-y-6 border-2"
                    style={{
                        background: 'rgba(255, 255, 255, 0.18)',
                        borderColor: '#9577CA'
                    }}
                >
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Test Credentials Info */}
                        {/* <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm">
                            <p className="font-semibold mb-2">Test Credentials:</p>
                            <p className="text-xs mb-1">Patient: metacuramycare@gmail.com / metacura123</p>
                            <p className="text-xs">Doctor: metacuradoctor@gmail.com / metacura456</p>
                        </div> */}

                        <div className="space-y-2">
                            <label className="text-black/80 text-sm" htmlFor="email">Email</label>
                            <div className="relative">
                                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white border border-gray-300 rounded-lg px-10 py-2.5 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                                                 <div className="space-y-2">
                             <label className="text-black/80 text-sm" htmlFor="password">Password</label>
                             <div className="relative">
                                 <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                 <input
                                     type={showPassword ? "text" : "password"}
                                     id="password"
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                     className="w-full bg-white border border-gray-300 rounded-lg px-10 py-2.5 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 pr-10"
                                     placeholder="Enter your password"
                                 />
                                 <button
                                     type="button"
                                     onClick={() => setShowPassword(!showPassword)}
                                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                 >
                                     {showPassword ? (
                                         <EyeOff className="w-5 h-5" />
                                     ) : (
                                         <Eye className="w-5 h-5" />
                                     )}
                                 </button>
                             </div>
                             <div className="text-right">
                                 <Link href="/verify-email?flow=forgot-password" className="text-white transition-colors text-sm">
                                     Forgot Password?
                                 </Link>
                             </div>
                         </div>

                        <button
                            disabled={isLoading}
                            className="w-full relative group"
                        >
                            <div className="absolute inset-0 rounded-lg" style={{ background: '#9577CA'}} />
                            <div className="relative px-8 py-2.5 rounded-lg transition-all duration-200 group-hover:bg-black/10">
                                <span className="relative z-10 flex items-center justify-center w-full text-white font-medium">
                                    {isLoading ? 'Signing in...' : 'LogIn'}
                                </span>
                            </div>
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-transparent px-2 text-white">Or sign in with</span>
                            </div>
                        </div>

                        {/* Google Sign In Button */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-white/20 rounded-lg bg-white backdrop-blur-sm text-black"
                            onClick={() => router.push('/careid')}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="font-bold">Sign in with Google</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }

