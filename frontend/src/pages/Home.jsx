import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Trophy, Users, Rocket, ArrowRight, Zap, Target, Award } from 'lucide-react';
import { stats, highlights } from '../mock';

const iconMap = {
  code: Code,
  trophy: Trophy,
  users: Users,
  rocket: Rocket
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1F3F] via-[#0A0D14] to-[#050B17]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E4FC2] rounded-full filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4C83FF] rounded-full filter blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* OctoDev Mascot */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9C] to-[#4C83FF] rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_638433d8-1a99-494b-95f4-d8fe4b96d5cc/artifacts/n9byq6tu_ChatGPT%20Image%20Oct%2015%2C%202025%2C%2012_22_20%20PM.png" 
                alt="OctoDev Mascot" 
                className="relative w-64 h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#4C83FF] to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(76,131,255,0.5)]">
              Learn. Build. Ship.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where EMU students <span className="text-[#00FF9C] font-semibold">code</span>, 
            <span className="text-[#4C83FF] font-semibold"> create</span>, and 
            <span className="text-[#FBBC04] font-semibold"> conquer</span> challenges together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="group px-8 py-4 bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#4C83FF]/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2">
              <span>Join the Club</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <Link 
              to="/events"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#0A0D14] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Events
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#4C83FF] rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-[#4C83FF] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#0A0D14] to-[#0C1F3F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              What We <span className="text-[#4C83FF]">Offer</span>
            </h2>
            <p className="text-gray-400 text-lg">Level up your skills through hands-on experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = iconMap[item.icon];
              const googleColors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];
              const color = googleColors[index % 4];
              
              return (
                <div 
                  key={item.id}
                  className="group relative bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30 hover:border-[#4C83FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#4C83FF]/20 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4C83FF]/0 to-[#4C83FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
                    >
                      <Icon size={28} style={{ color }} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#4C83FF] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0A0D14] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF9C] rounded-full filter blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E4FC2] rounded-full filter blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Our <span className="text-[#00FF9C]">Impact</span>
            </h2>
            <p className="text-gray-400 text-lg">Building the future, one line of code at a time</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-8 border border-[#4285F4]/30 hover:border-[#4285F4] transition-all duration-300 hover:shadow-xl hover:shadow-[#4285F4]/20 text-center group">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#4285F4] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-5xl font-black text-white mb-2">{stats.members}</div>
              <div className="text-gray-400 font-medium">Active Members</div>
            </div>

            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-8 border border-[#FBBC04]/30 hover:border-[#FBBC04] transition-all duration-300 hover:shadow-xl hover:shadow-[#FBBC04]/20 text-center group">
              <Zap className="w-12 h-12 mx-auto mb-4 text-[#FBBC04] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-5xl font-black text-white mb-2">{stats.coinsRedeemed.toLocaleString()}</div>
              <div className="text-gray-400 font-medium">Coins Redeemed</div>
            </div>

            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-8 border border-[#34A853]/30 hover:border-[#34A853] transition-all duration-300 hover:shadow-xl hover:shadow-[#34A853]/20 text-center group">
              <Target className="w-12 h-12 mx-auto mb-4 text-[#34A853] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-5xl font-black text-white mb-2">{stats.projectsDeployed}</div>
              <div className="text-gray-400 font-medium">Projects Deployed</div>
            </div>

            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-8 border border-[#EA4335]/30 hover:border-[#EA4335] transition-all duration-300 hover:shadow-xl hover:shadow-[#EA4335]/20 text-center group">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#EA4335] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-5xl font-black text-white mb-2">{stats.eventsHosted}</div>
              <div className="text-gray-400 font-medium">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#0C1F3F] via-[#0A0D14] to-[#1E4FC2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #4C83FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Ready to <span className="text-[#00FF9C]">Level Up</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join GDSC EMU and become part of a community that's shaping the future of technology. 
            Earn coins, build projects, and make lasting connections.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-10 py-5 bg-gradient-to-r from-[#00FF9C] to-[#4C83FF] text-[#0A0D14] rounded-full font-black text-lg hover:shadow-2xl hover:shadow-[#00FF9C]/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2">
              <span>Get Started Now</span>
              <Rocket className="group-hover:translate-x-1 transition-transform duration-300" size={22} />
            </button>
            <Link 
              to="/events"
              className="px-10 py-5 border-2 border-[#00FF9C] text-[#00FF9C] rounded-full font-bold text-lg hover:bg-[#00FF9C] hover:text-[#0A0D14] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Marquee */}
      <footer className="bg-[#0A0D14] border-t border-[#1E4FC2]/30 py-6 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-4xl font-black text-[#1E4FC2] mx-8">CODE</span>
          <span className="text-4xl font-black text-[#4C83FF] mx-8">CREATE</span>
          <span className="text-4xl font-black text-[#00FF9C] mx-8">COMPETE</span>
          <span className="text-4xl font-black text-white mx-8">GDSC EMU</span>
          <span className="text-4xl font-black text-[#1E4FC2] mx-8">CODE</span>
          <span className="text-4xl font-black text-[#4C83FF] mx-8">CREATE</span>
          <span className="text-4xl font-black text-[#00FF9C] mx-8">COMPETE</span>
          <span className="text-4xl font-black text-white mx-8">GDSC EMU</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
