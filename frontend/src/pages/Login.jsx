import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Chrome } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - just navigate to dashboard
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // Mock Google login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E4FC2] rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF9C] rounded-full filter blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-block relative group mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9C] to-[#4C83FF] rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <img 
              src="https://customer-assets.emergentagent.com/job_638433d8-1a99-494b-95f4-d8fe4b96d5cc/artifacts/n9byq6tu_ChatGPT%20Image%20Oct%2015%2C%202025%2C%2012_22_20%20PM.png" 
              alt="OctoDev" 
              className="relative w-32 h-32 object-contain"
            />
          </div>
          <h1 className="text-3xl font-black mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your GDSC EMU account</p>
        </div>

        {/* Login Form */}
        <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-8 border border-[#1E4FC2]/30 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="alex.chen@emich.edu"
                  className="w-full pl-12 pr-4 py-3 bg-[#0A0D14] border border-[#1E4FC2]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4C83FF] focus:shadow-lg focus:shadow-[#4C83FF]/20 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-[#0A0D14] border border-[#1E4FC2]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4C83FF] focus:shadow-lg focus:shadow-[#4C83FF]/20 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[#1E4FC2] bg-[#0A0D14] text-[#4C83FF] focus:ring-[#4C83FF] focus:ring-offset-0" />
                <span className="text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-[#4C83FF] hover:text-[#00FF9C] transition-colors duration-300">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-[#4C83FF]/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
            >
              <span>Sign In</span>
              <LogIn size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1E4FC2]/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0C1F3F] text-gray-400">or continue with</span>
            </div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-4 bg-white/5 border-2 border-white/10 hover:border-[#4285F4] text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-3 group"
          >
            <Chrome className="text-[#4285F4] group-hover:scale-110 transition-transform duration-300" size={24} />
            <span>Sign in with Google</span>
          </button>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">Don't have an account? </span>
            <Link to="/signup" className="text-[#4C83FF] hover:text-[#00FF9C] font-semibold transition-colors duration-300">
              Sign up
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;