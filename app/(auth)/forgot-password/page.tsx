'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { authService } from '@/lib/api/auth';

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setIsLoading(true);
        
        if (!newPassword || !confirmPassword) {
            setError('Please fill in all fields');
            setIsLoading(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(newPassword)) {
            setError('Password must be at least 8 characters and contain 1 number, 1 uppercase letter, 1 lowercase letter, and 1 symbol');
            setIsLoading(false);
            return;
        }

        try {
            // Simulate password reset
            setSuccess('Password has been reset successfully');
            setTimeout(() => {
                router.push('/login');
            }, 3000);
        } catch (err) {
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

            {/* Forgot Password Form Container */}
            <div className="w-full max-w-md relative z-10">
                

                <h1 className="text-[#9577CA] text-3xl font-bold text-center mb-2">
                    New Password
                </h1>
                
                <p className="text-white text-center mb-8">
                    Your new password must be different
                </p>

                <form
                    onSubmit={handleResetPassword}
                    className="p-8 rounded-2xl space-y-6"
                    style={{
                        background: 'rgba(255, 255, 255, 0.18)'
                    }}
                >
                    {error && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
                            {success}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-black text-sm" htmlFor="newPassword">Password</label>
                        <div className="relative">
                            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full bg-white border border-gray-300 rounded-lg px-10 py-2.5 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 pr-10"
                                placeholder="Enter new password"
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
                    </div>

                    <div className="space-y-2">
                        <label className="text-black text-sm" htmlFor="confirmPassword">Confirm Password</label>
                        <div className="relative">
                            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-white border border-gray-300 rounded-lg px-10 py-2.5 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 pr-10"
                                placeholder="Confirm new password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Password Requirements */}
                    <div className="text-xs text-white">
                        Password must be at least <span style={{ color: "#9577CA" }}>8 characters</span> and contain <span style={{ color: "white" }}>1 number</span>, <span style={{ color: "white" }}>1 uppercase letter</span>, <span style={{ color: "#9577CA" }}>1 lowercase letter</span>, and <span style={{ color: "white" }}>1 symbol</span>.
                    </div>

                    <button
                        disabled={isLoading}
                        className="w-full relative group"
                    >
                        <div className="absolute inset-0 rounded-lg bg-[#9577CA]" />
                        <div className="relative px-8 py-2.5 rounded-lg transition-all duration-200 group-hover:bg-black/10">
                            <span className="relative z-10 flex items-center justify-center w-full text-white font-medium">
                                {isLoading ? 'Creating...' : 'Create New Password'}
                            </span>
                        </div>
                    </button>
                        
                       
                    </form>
                </div>


        </div>
    );
} 