import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Chrome, UserCircle } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock signup - just navigate to dashboard
    navigate('/dashboard');
  };

  const handleGoogleSignup = () => {
    // Mock Google signup
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
          <h1 className="text-3xl font-black mb-2">Join GDSC EMU</h1>
          <p className="text-gray-400">Start your coding journey today</p>
        </div>

        {/* Signup Form */}
        <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-8 border border-[#1E4FC2]/30 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Alex Chen"
                  className="w-full pl-12 pr-4 py-3 bg-[#0A0D14] border border-[#1E4FC2]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4C83FF] focus:shadow-lg focus:shadow-[#4C83FF]/20 transition-all duration-300"
                  required
                />
              </div>
            </div>

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

            {/* Role Toggle */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-300">I am a:</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, role: 'student'})}
                  className={`py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                    ${formData.role === 'student' 
                      ? 'bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white shadow-lg shadow-[#4C83FF]/30' 
                      : 'bg-[#0A0D14] border border-[#1E4FC2]/30 text-gray-400 hover:border-[#4C83FF]'}
                  `}
                >
                  <UserCircle size={20} />
                  <span>Student</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, role: 'admin'})}
                  className={`py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                    ${formData.role === 'admin' 
                      ? 'bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white shadow-lg shadow-[#4C83FF]/30' 
                      : 'bg-[#0A0D14] border border-[#1E4FC2]/30 text-gray-400 hover:border-[#4C83FF]'}
                  `}
                >
                  <User size={20} />
                  <span>Admin</span>
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start space-x-3 cursor-pointer text-sm">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-[#1E4FC2] bg-[#0A0D14] text-[#4C83FF] focus:ring-[#4C83FF] focus:ring-offset-0" required />
              <span className="text-gray-400">
                I agree to the <a href="#" className="text-[#4C83FF] hover:text-[#00FF9C]">Terms of Service</a> and <a href="#" className="text-[#4C83FF] hover:text-[#00FF9C]">Privacy Policy</a>
              </span>
            </label>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#00FF9C] to-[#4C83FF] text-[#0A0D14] rounded-xl font-black hover:shadow-2xl hover:shadow-[#00FF9C]/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1E4FC2]/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0C1F3F] text-gray-400">or sign up with</span>
            </div>
          </div>

          {/* Google Signup */}
          <button
            onClick={handleGoogleSignup}
            className="w-full py-4 bg-white/5 border-2 border-white/10 hover:border-[#4285F4] text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-3 group"
          >
            <Chrome className="text-[#4285F4] group-hover:scale-110 transition-transform duration-300" size={24} />
            <span>Sign up with Google</span>
          </button>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">Already have an account? </span>
            <Link to="/login" className="text-[#4C83FF] hover:text-[#00FF9C] font-semibold transition-colors duration-300">
              Sign in
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

export default Signup;