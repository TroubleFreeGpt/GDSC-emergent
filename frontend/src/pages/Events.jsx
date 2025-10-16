import React, { useState, useMemo } from 'react';
import { Calendar, MapPin, Clock, Users, Coins, Filter, Search } from 'lucide-react';
import { events } from '../mock';

const Events = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const eventTypes = ['All', 'Hackathon', 'Workshop', 'Challenge'];

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesType = selectedType === 'All' || event.type === selectedType;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [selectedType, searchQuery]);

  const getTypeColor = (type) => {
    switch(type) {
      case 'Hackathon': return '#EA4335';
      case 'Workshop': return '#4285F4';
      case 'Challenge': return '#FBBC04';
      default: return '#4C83FF';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#34A853';
      case 'Intermediate': return '#FBBC04';
      case 'Advanced': return '#EA4335';
      default: return '#4C83FF';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            Upcoming <span className="text-[#4C83FF]">Events</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From hackathons to workshops, find opportunities to learn, build, and compete.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#0C1F3F] border border-[#1E4FC2]/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4C83FF] focus:shadow-lg focus:shadow-[#4C83FF]/20 transition-all duration-300"
            />
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center space-x-2 text-gray-400">
              <Filter size={20} />
              <span className="font-medium">Filter:</span>
            </div>
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95
                  ${selectedType === type
                    ? 'bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white shadow-lg shadow-[#4C83FF]/30'
                    : 'bg-[#0C1F3F] text-gray-400 border border-[#1E4FC2]/30 hover:border-[#4C83FF] hover:text-white'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center text-gray-400">
          Showing <span className="text-[#4C83FF] font-semibold">{filteredEvents.length}</span> event{filteredEvents.length !== 1 ? 's' : ''}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => {
              const typeColor = getTypeColor(event.type);
              const difficultyColor = getDifficultyColor(event.difficulty);

              return (
                <div
                  key={event.id}
                  className="group relative bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30 hover:border-[#4C83FF] transition-all duration-300 hover:shadow-2xl hover:shadow-[#4C83FF]/20 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4C83FF]/0 to-[#4C83FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-bold text-[#0A0D14]"
                            style={{ backgroundColor: typeColor }}
                          >
                            {event.type}
                          </span>
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-bold border-2"
                            style={{ borderColor: difficultyColor, color: difficultyColor }}
                          >
                            {event.difficulty}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black text-white group-hover:text-[#4C83FF] transition-colors duration-300">
                          {event.title}
                        </h3>
                      </div>
                      
                      {event.coins && (
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-[#FBBC04] to-[#00FF9C] text-[#0A0D14] px-3 py-1.5 rounded-full font-bold text-sm">
                          <Coins size={16} />
                          <span>{event.coins}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-sm">
                        <Calendar className="text-[#4C83FF]" size={18} />
                        <span className="text-gray-300 font-medium">{formatDate(event.date)}</span>
                        <Clock className="text-[#4C83FF] ml-2" size={18} />
                        <span className="text-gray-300 font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <MapPin className="text-[#00FF9C]" size={18} />
                        <span className="text-gray-300 font-medium">{event.location}</span>
                      </div>
                      {event.spotsLeft !== null && (
                        <div className="flex items-center space-x-3 text-sm">
                          <Users className="text-[#FBBC04]" size={18} />
                          <span className="text-gray-300 font-medium">
                            {event.spotsLeft} spots left out of {event.totalSpots}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-[#1E4FC2]/20 border border-[#1E4FC2]/40 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#4C83FF]/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      Register Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#0C1F3F] border border-[#1E4FC2]/30 flex items-center justify-center">
              <Search className="text-gray-500" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
