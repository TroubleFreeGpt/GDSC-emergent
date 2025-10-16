import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Target, Calendar, ShoppingBag, Coins, 
  Settings, LogOut, ChevronRight, TrendingUp, UserPlus, Award,
  Activity, CheckCircle, Clock
} from 'lucide-react';
import { adminStats, leaderboard, recentActions, events, challenges } from '../mock';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'students', label: 'Manage Students', icon: Users },
    { id: 'challenges', label: 'Challenges', icon: Target },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'shop', label: 'Shop Inventory', icon: ShoppingBag },
    { id: 'coins', label: 'Coin Logs', icon: Coins }
  ];

  const getActionColor = (type) => {
    switch(type) {
      case 'challenge': return '#4C83FF';
      case 'event': return '#34A853';
      case 'coins': return '#FBBC04';
      case 'shop': return '#EA4335';
      case 'students': return '#00FF9C';
      default: return '#4C83FF';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white pt-20">
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-[#0C1F3F] to-[#050B17] border-r border-[#1E4FC2]/30 transition-all duration-300 fixed left-0 top-20 bottom-0 z-40`}>
          <div className="p-6">
            {/* Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mb-6 w-full flex items-center justify-center py-2 bg-[#0A0D14] border border-[#1E4FC2]/30 hover:border-[#4C83FF] rounded-lg transition-all duration-300"
            >
              <ChevronRight 
                className={`text-[#4C83FF] transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>

            {/* Navigation */}
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white shadow-lg shadow-[#4C83FF]/30'
                        : 'text-gray-400 hover:bg-[#0A0D14] hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    {sidebarOpen && <span>{item.label}</span>}
                  </button>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            {sidebarOpen && (
              <div className="mt-8 pt-6 border-t border-[#1E4FC2]/30 space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold text-gray-400 hover:bg-[#0A0D14] hover:text-white transition-all duration-300">
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold text-gray-400 hover:bg-[#EA4335]/20 hover:text-[#EA4335] transition-all duration-300">
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 ${sidebarOpen ? 'ml-72' : 'ml-20'} transition-all duration-300 p-8`}>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-black mb-2">
                  Admin <span className="text-[#4C83FF]">Dashboard</span>
                </h1>
                <p className="text-gray-400 text-lg">Manage GDSC EMU operations</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#4285F4]/30 hover:border-[#4285F4] transition-all duration-300 hover:shadow-xl hover:shadow-[#4285F4]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#4285F4]/20 rounded-xl flex items-center justify-center">
                      <Users className="text-[#4285F4]" size={24} />
                    </div>
                    <TrendingUp className="text-[#34A853]" size={20} />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">{adminStats.totalStudents}</div>
                  <div className="text-gray-400 font-medium">Total Students</div>
                  <div className="mt-3 text-sm text-[#34A853]">+12 this month</div>
                </div>

                <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#34A853]/30 hover:border-[#34A853] transition-all duration-300 hover:shadow-xl hover:shadow-[#34A853]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#34A853]/20 rounded-xl flex items-center justify-center">
                      <Calendar className="text-[#34A853]" size={24} />
                    </div>
                    <Activity className="text-[#34A853]" size={20} />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">{adminStats.activeEvents}</div>
                  <div className="text-gray-400 font-medium">Active Events</div>
                  <div className="mt-3 text-sm text-gray-500">{adminStats.averageAttendance}% avg attendance</div>
                </div>

                <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#FBBC04]/30 hover:border-[#FBBC04] transition-all duration-300 hover:shadow-xl hover:shadow-[#FBBC04]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#FBBC04]/20 rounded-xl flex items-center justify-center">
                      <Coins className="text-[#FBBC04]" size={24} />
                    </div>
                    <TrendingUp className="text-[#34A853]" size={20} />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">{adminStats.totalCoinsIssued.toLocaleString()}</div>
                  <div className="text-gray-400 font-medium">Coins Issued</div>
                  <div className="mt-3 text-sm text-[#34A853]">+2.3k this week</div>
                </div>

                <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#4C83FF]/30 hover:border-[#4C83FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#4C83FF]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#4C83FF]/20 rounded-xl flex items-center justify-center">
                      <Target className="text-[#4C83FF]" size={24} />
                    </div>
                    <CheckCircle className="text-[#34A853]" size={20} />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">{adminStats.challengesActive}</div>
                  <div className="text-gray-400 font-medium">Active Challenges</div>
                  <div className="mt-3 text-sm text-gray-500">256 total completions</div>
                </div>

                <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#EA4335]/30 hover:border-[#EA4335] transition-all duration-300 hover:shadow-xl hover:shadow-[#EA4335]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#EA4335]/20 rounded-xl flex items-center justify-center">
                      <ShoppingBag className="text-[#EA4335]" size={24} />
                    </div>
                    <Award className="text-[#FBBC04]" size={20} />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">{adminStats.shopItemsSold}</div>
                  <div className="text-gray-400 font-medium">Items Redeemed</div>
                  <div className="mt-3 text-sm text-[#34A853]">8 today</div>
                </div>

                <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#00FF9C]/30 hover:border-[#00FF9C] transition-all duration-300 hover:shadow-xl hover:shadow-[#00FF9C]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#00FF9C]/20 rounded-xl flex items-center justify-center">
                      <UserPlus className="text-[#00FF9C]" size={24} />
                    </div>
                    <Clock className="text-[#FBBC04]" size={20} />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">15</div>
                  <div className="text-gray-400 font-medium">Pending Approvals</div>
                  <div className="mt-3 text-sm text-[#FBBC04]">Action required</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Actions */}
                <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30">
                  <h2 className="text-2xl font-black mb-6">Recent Actions</h2>
                  <div className="space-y-4">
                    {recentActions.map((action) => (
                      <div 
                        key={action.id}
                        className="flex items-start space-x-4 p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20 hover:border-[#4C83FF] transition-all duration-300"
                      >
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${getActionColor(action.type)}20`, color: getActionColor(action.type) }}
                        >
                          {action.type === 'challenge' && <Target size={20} />}
                          {action.type === 'event' && <Calendar size={20} />}
                          {action.type === 'coins' && <Coins size={20} />}
                          {action.type === 'shop' && <ShoppingBag size={20} />}
                          {action.type === 'students' && <Users size={20} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white text-sm mb-1">{action.action}</div>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{action.admin}</span>
                            <span>•</span>
                            <span>{action.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Performers */}
                <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30">
                  <h2 className="text-2xl font-black mb-6">Top Performers</h2>
                  <div className="space-y-3">
                    {leaderboard.slice(0, 5).map((student) => (
                      <div 
                        key={student.rank}
                        className="flex items-center space-x-4 p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20 hover:border-[#4C83FF] transition-all duration-300"
                      >
                        <div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
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
                          <div className="font-semibold text-white text-sm truncate">{student.name}</div>
                          <div className="text-xs text-gray-500">{student.tier}</div>
                        </div>
                        <div className="flex items-center space-x-1 text-[#FBBC04] font-bold text-sm">
                          <Coins size={14} />
                          <span>{student.coins}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Students Tab */}
          {activeTab === 'students' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-4xl font-black mb-2">Manage Students</h1>
                  <p className="text-gray-400 text-lg">View and manage all GDSC members</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#4C83FF]/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <UserPlus size={20} />
                  <span>Add Student</span>
                </button>
              </div>

              <div className="bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl border border-[#1E4FC2]/30 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#0A0D14] border-b border-[#1E4FC2]/30">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Student</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Tier</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Coins</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((student) => (
                        <tr key={student.rank} className="border-b border-[#1E4FC2]/20 hover:bg-[#0A0D14]/50 transition-colors duration-200">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E4FC2] to-[#4C83FF] flex items-center justify-center font-bold text-sm">
                                {student.avatar}
                              </div>
                              <span className="font-semibold text-white">{student.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-400">{student.name.toLowerCase().replace(' ', '.')}@emich.edu</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: `${student.tier === 'Diamond' ? '#4C83FF' : student.tier === 'Platinum' ? '#00FF9C' : student.tier === 'Gold' ? '#FBBC04' : '#9CA3AF'}20`, color: student.tier === 'Diamond' ? '#4C83FF' : student.tier === 'Platinum' ? '#00FF9C' : student.tier === 'Gold' ? '#FBBC04' : '#9CA3AF' }}>
                              {student.tier}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-1 text-[#FBBC04] font-bold">
                              <Coins size={16} />
                              <span>{student.coins}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-[#4C83FF] hover:text-[#00FF9C] font-semibold text-sm transition-colors duration-300">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== 'overview' && activeTab !== 'students' && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#0C1F3F] border border-[#1E4FC2]/30 flex items-center justify-center">
                {activeTab === 'challenges' && <Target className="text-[#4C83FF]" size={40} />}
                {activeTab === 'events' && <Calendar className="text-[#34A853]" size={40} />}
                {activeTab === 'shop' && <ShoppingBag className="text-[#EA4335]" size={40} />}
                {activeTab === 'coins' && <Coins className="text-[#FBBC04]" size={40} />}
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2 capitalize">{activeTab} Management</h3>
              <p className="text-gray-500">Coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
