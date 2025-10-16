import React, { useState, useMemo } from 'react';
import { ShoppingBag, Coins, Filter, TrendingUp, Package, Award, History } from 'lucide-react';
import { products, currentStudent, purchaseHistory } from '../mock';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [showHistory, setShowHistory] = useState(false);

  const categories = ['All', 'Apparel', 'Accessories', 'Perks', 'Tech'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => 
      selectedCategory === 'All' || product.category === selectedCategory
    );

    // Sort products
    switch(sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const canAfford = (price) => currentStudent.coins >= price;

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-2">
                Coin <span className="text-[#FBBC04]">Shop</span>
              </h1>
              <p className="text-gray-400 text-lg">Redeem your coins for exclusive rewards</p>
            </div>

            {/* Coin Balance */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowHistory(!showHistory)}
                className="px-6 py-3 bg-[#0C1F3F] border border-[#1E4FC2]/30 hover:border-[#4C83FF] text-white rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <History size={20} />
                <span>History</span>
              </button>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-[#FBBC04] to-[#00FF9C] text-[#0A0D14] px-6 py-3 rounded-full font-bold shadow-lg shadow-[#00FF9C]/30">
                <Coins size={24} />
                <span className="text-xl">{currentStudent.coins}</span>
              </div>
            </div>
          </div>

          {/* Purchase History Modal */}
          {showHistory && (
            <div className="mb-6 bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl p-6 border border-[#1E4FC2]/30">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black">Purchase History</h2>
                <button 
                  onClick={() => setShowHistory(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                {purchaseHistory.map((purchase) => (
                  <div key={purchase.id} className="flex items-center justify-between p-4 bg-[#0A0D14] rounded-xl border border-[#1E4FC2]/20">
                    <div>
                      <div className="font-semibold text-white">{purchase.productName}</div>
                      <div className="text-sm text-gray-400">{new Date(purchase.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-[#EA4335] font-bold mb-1">
                        <Coins size={14} />
                        <span>-{purchase.coins}</span>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${purchase.status === 'Delivered' ? 'bg-[#34A853]/20 text-[#34A853]' : 'bg-[#FBBC04]/20 text-[#FBBC04]'}`}>
                        {purchase.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Filters & Sort */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3 text-gray-400">
                <Filter size={20} />
                <span className="font-medium">Category:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105
                      ${selectedCategory === category
                        ? 'bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white shadow-lg shadow-[#4C83FF]/30'
                        : 'bg-[#0C1F3F] text-gray-400 border border-[#1E4FC2]/30 hover:border-[#4C83FF] hover:text-white'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-64">
              <div className="flex items-center space-x-2 mb-3 text-gray-400">
                <TrendingUp size={20} />
                <span className="font-medium">Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-[#0C1F3F] border border-[#1E4FC2]/30 rounded-xl text-white focus:outline-none focus:border-[#4C83FF] focus:shadow-lg focus:shadow-[#4C83FF]/20 transition-all duration-300"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center text-gray-400">
          Showing <span className="text-[#4C83FF] font-semibold">{filteredAndSortedProducts.length}</span> product{filteredAndSortedProducts.length !== 1 ? 's' : ''}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => {
            const affordable = canAfford(product.price);
            
            return (
              <div
                key={product.id}
                className={`group relative bg-gradient-to-br from-[#0C1F3F] to-[#050B17] rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${
                  affordable 
                    ? 'border-[#1E4FC2]/30 hover:border-[#4C83FF] hover:shadow-[#4C83FF]/20 hover:-translate-y-1' 
                    : 'border-gray-700/30 opacity-60'
                }`}
              >
                {/* Product Image */}
                <div className="relative h-48 bg-[#0A0D14] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ${affordable ? 'group-hover:scale-110' : ''}`}
                  />
                  
                  {/* Popularity Badge */}
                  {product.popularity > 90 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#EA4335] to-[#FBBC04] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Award size={12} />
                      <span>HOT</span>
                    </div>
                  )}

                  {/* Stock Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#0A0D14]/90 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 border border-[#1E4FC2]/30">
                    <Package size={12} />
                    <span>{product.stock} left</span>
                  </div>

                  {!affordable && (
                    <div className="absolute inset-0 bg-[#0A0D14]/80 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <Coins className="mx-auto mb-2 text-gray-500" size={32} />
                        <div className="text-sm font-semibold text-gray-400">Insufficient Coins</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${affordable ? 'text-white group-hover:text-[#4C83FF]' : 'text-gray-500'}`}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>
                  </div>

                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#1E4FC2]/20 border border-[#1E4FC2]/40 rounded-full text-xs font-semibold text-[#4C83FF]">
                      {product.category}
                    </span>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Coins className="text-[#FBBC04]" size={20} />
                      <span className="text-2xl font-black text-white">{product.price}</span>
                    </div>
                    <button
                      disabled={!affordable}
                      className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                        affordable
                          ? 'bg-gradient-to-r from-[#1E4FC2] to-[#4C83FF] text-white hover:shadow-lg hover:shadow-[#4C83FF]/50 hover:scale-105 active:scale-95'
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Redeem
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                {affordable && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4C83FF]/0 to-[#4C83FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#0C1F3F] border border-[#1E4FC2]/30 flex items-center justify-center">
              <ShoppingBag className="text-gray-500" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters</p>
          </div>
        )}

        {/* Earn More Coins CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#0C1F3F] via-[#0A0D14] to-[#1E4FC2] rounded-2xl p-8 border border-[#1E4FC2]/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #4C83FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4">
              Need More <span className="text-[#FBBC04]">Coins</span>?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Complete challenges, attend workshops, and participate in hackathons to earn more coins!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-[#00FF9C] to-[#4C83FF] text-[#0A0D14] rounded-full font-black hover:shadow-2xl hover:shadow-[#00FF9C]/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View Challenges
              </a>
              <a 
                href="/events"
                className="px-8 py-4 border-2 border-[#00FF9C] text-[#00FF9C] rounded-full font-bold hover:bg-[#00FF9C] hover:text-[#0A0D14] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Attend Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
