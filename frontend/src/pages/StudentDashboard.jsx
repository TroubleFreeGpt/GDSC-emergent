import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Target, Calendar, Coins, TrendingUp, Award, Clock, CheckCircle, Circle, AlertCircle } from 'lucide-react';
import { currentStudent, challenges, events, coinTransactions, leaderboard } from '../mock';

const StudentDashboard = () => {
  const progressPercentage = (currentStudent.xp / currentStudent.nextTierXP) * 100;

  const getTierColor = (tier) => {
    switch(tier) {
      case 'Diamond': return '#4C83FF';
      case 'Platinum': return '#00FF9C';
      case 'Gold': return '#FBBC04';
      case 'Silver': return '#9CA3AF';
      case 'Bronze': return '#EA4335';
      default: return '#4C83FF';
    }
  };

  const getChallengeIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle className="text-[#34A853]" size={20} />;
      case 'in-progress': return <Clock className="text-[#FBBC04]" size={20} />;
      case 'not-started': return <Circle className="text-gray-500" size={20} />;
      default: return <Circle size={20} />;
    }
  };

  const getChallengeStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-[#34A853]/20 text-[#34A853] border-[#34A853]/40';
      case 'in-progress': return 'bg-[#FBBC04]/20 text-[#FBBC04] border-[#FBBC04]/40';
      case 'not-started': return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2">
              Welcome back, <span className="text-[#4C83FF]">{currentStudent.name.split(' ')[0]}</span>!
            </h1>
            <p className="text-gray-400 text-lg">Track your progress and keep building</p>
          </div>
          
          {/* Coin Balance & Rank */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-[#FBBC04] to-[#00FF9C] text-[#0A0D14] px-6 py-3 rounded-full font-bold shadow-lg shadow-[#00FF9C]/30">
              <Coins size={24} />
              <span className="text-xl">{currentStudent.coins}</span>
            </div>
            <div 
              className="px-6 py-3 rounded-full font-bold border-2 shadow-lg"
              style={{ 
                borderColor: getTierColor(currentStudent.tier),
                backgroundColor: `${getTierColor(currentStudent.tier)}20`,
                color: getTierColor(currentStudent.tier)
              }}
            >
              {currentStudent.tier}
            </div>
          </div>
        </div>

        {/* Progress Tracker Card */}
        <div className="mb-8 bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-8 border border-[#1E4FC2]/30">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black mb-1">Your Progress</h2>
              <p className="text-gray-400">Level up to unlock exclusive perks</p>
            </div>
            <TrendingUp className="text-[#00FF9C]" size={32} />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-300">XP Progress</span>
              <span className="text-sm font-bold text-[#4C83FF]">{currentStudent.xp} / {currentStudent.nextTierXP} XP</span>
            </div>
            <div className="w-full h-4 bg-[#0A0D14] rounded-full overflow-hidden border border-[#1E4FC2]/30">
              <div 
                className="h-full bg-gradient-to-r from-[#00FF9C] to-[#4C83FF] transition-all duration-500 relative overflow-hidden"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20">
              <div className="text-3xl font-black text-[#4C83FF] mb-1">{currentStudent.eventsAttended}</div>
              <div className="text-sm text-gray-400">Events Attended</div>
            </div>
            <div className="text-center p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20">
              <div className="text-3xl font-black text-[#00FF9C] mb-1">{currentStudent.challengesCompleted}</div>
              <div className="text-sm text-gray-400">Challenges Done</div>
            </div>
            <div className="text-center p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20">
              <div className="text-3xl font-black text-[#FBBC04] mb-1">{currentStudent.projectsDeployed}</div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </div>
            <div className="text-center p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20">
              <div className="text-3xl font-black text-[#EA4335] mb-1">{Math.floor((Date.now() - new Date(currentStudent.joinedDate).getTime()) / (1000 * 60 * 60 * 24 * 30))}</div>
              <div className="text-sm text-gray-400">Months Active</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Challenges */}
            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Target className="text-[#4C83FF]" size={28} />
                  <h2 className="text-2xl font-black">Current Challenges</h2>
                </div>
                <Link to="/challenges" className="text-[#4C83FF] hover:text-[#00FF9C] text-sm font-semibold transition-colors duration-300">
                  View All →
                </Link>
              </div>

              <div className="space-y-4">
                {challenges.slice(0, 4).map((challenge) => (
                  <div 
                    key={challenge.id}
                    className="p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20 hover:border-[#4C83FF] transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {getChallengeIcon(challenge.status)}
                          <h3 className="font-bold text-white group-hover:text-[#4C83FF] transition-colors duration-300">
                            {challenge.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{challenge.description}</p>
                        <div className="flex items-center flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getChallengeStatusColor(challenge.status)}`}>
                            {challenge.status.replace('-', ' ').toUpperCase()}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1E4FC2]/20 text-[#4C83FF] border border-[#1E4FC2]/40">
                            {challenge.difficulty}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FBBC04]/20 text-[#FBBC04] border border-[#FBBC04]/40">
                            {challenge.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2 ml-4">
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-[#FBBC04] to-[#00FF9C] text-[#0A0D14] px-3 py-1 rounded-full font-bold text-sm">
                          <Coins size={14} />
                          <span>{challenge.coins}</span>
                        </div>
                        <div className="text-xs text-gray-500">Due: {new Date(challenge.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                      </div>
                    </div>
                  </div>
                ))}\n              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-[#00FF9C]" size={28} />
                  <h2 className="text-2xl font-black">Upcoming Events</h2>
                </div>
                <Link to="/events" className="text-[#4C83FF] hover:text-[#00FF9C] text-sm font-semibold transition-colors duration-300">
                  View All →
                </Link>
              </div>

              <div className="space-y-4">
                {events.slice(0, 3).map((event) => (
                  <div 
                    key={event.id}
                    className="p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20 hover:border-[#4C83FF] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-white group-hover:text-[#4C83FF] transition-colors duration-300 mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-[#4C83FF]/50 transition-all duration-300 hover:scale-105">
                        RSVP
                      </button>
                    </div>
                  </div>
                ))}\n              </div>
            </div>

            {/* Coin Activity */}
            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30">
              <div className="flex items-center space-x-3 mb-6">
                <Coins className="text-[#FBBC04]" size={28} />
                <h2 className="text-2xl font-black">Recent Transactions</h2>
              </div>

              <div className="space-y-3">
                {coinTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'earned' ? 'bg-[#00FF9C]/20 text-[#00FF9C]' : 'bg-[#EA4335]/20 text-[#EA4335]'}`}>
                        {transaction.type === 'earned' ? '+' : '-'}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{transaction.description}</div>
                        <div className="text-xs text-gray-500">{new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                      </div>
                    </div>
                    <div className={`font-bold ${transaction.type === 'earned' ? 'text-[#00FF9C]' : 'text-[#EA4335]'}`}>
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                    </div>
                  </div>
                ))}\n              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-8">
            {/* Leaderboard */}
            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30">
              <div className="flex items-center space-x-3 mb-6">
                <Trophy className="text-[#FBBC04]" size={28} />
                <h2 className="text-2xl font-black">Leaderboard</h2>
              </div>

              <div className="space-y-3">
                {leaderboard.slice(0, 10).map((student) => {
                  const isCurrentUser = student.name === currentStudent.name;
                  return (
                    <div 
                      key={student.rank}
                      className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                        isCurrentUser 
                          ? 'bg-gradient-to-r from-[#1E4FC2]/30 to-[#4C83FF]/30 border-2 border-[#4C83FF]' 
                          : 'bg-[#0A0D14] border border-[#1E4FC2]/20 hover:border-[#4C83FF]'
                      }`}
                    >
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          student.rank === 1 ? 'bg-[#FBBC04] text-[#0A0D14]' :
                          student.rank === 2 ? 'bg-gray-300 text-[#0A0D14]' :
                          student.rank === 3 ? 'bg-[#EA4335] text-white' :
                          'bg-[#1E4FC2]/30 text-[#4C83FF]'
                        }`}
                      >
                        {student.rank}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E4FC2] to-[#4C83FF] flex items-center justify-center font-bold text-sm">
                        {student.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-sm truncate ${isCurrentUser ? 'text-[#00FF9C]' : 'text-white'}`}>
                          {student.name} {isCurrentUser && '(You)'}
                        </div>
                        <div 
                          className="text-xs font-semibold"
                          style={{ color: getTierColor(student.tier) }}
                        >
                          {student.tier}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-[#FBBC04] font-bold text-sm">
                        <Coins size={14} />
                        <span>{student.coins}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30">
              <h2 className="text-xl font-black mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link to="/shop" className="block w-full py-3 bg-gradient-to-r from-[#FBBC04] to-[#00FF9C] text-[#0A0D14] rounded-xl font-bold text-center hover:shadow-lg hover:shadow-[#00FF9C]/50 transition-all duration-300 hover:scale-[1.02]">
                  Visit Shop
                </Link>
                <Link to="/events" className="block w-full py-3 bg-[#0A0D14] border-2 border-[#4C83FF] text-[#4C83FF] rounded-xl font-bold text-center hover:bg-[#4C83FF] hover:text-white transition-all duration-300 hover:scale-[1.02]">
                  Browse Events
                </Link>
                <Link to="/challenges" className="block w-full py-3 bg-[#0A0D14] border-2 border-[#00FF9C] text-[#00FF9C] rounded-xl font-bold text-center hover:bg-[#00FF9C] hover:text-[#0A0D14] transition-all duration-300 hover:scale-[1.02]">
                  View Challenges
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
