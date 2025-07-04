import React, { useState } from 'react';
import { Filter, Heart, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'gel-polish',
      title: 'Нюдовый маникюр',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 45
    },
    {
      id: 2,
      category: 'nail-art',
      title: 'Цветочный дизайн',
      image: 'https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 72
    },
    {
      id: 3,
      category: 'extensions',
      title: 'Наращивание гелем',
      image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 38
    },
    {
      id: 4,
      category: 'gel-polish',
      title: 'Глиттерный маникюр',
      image: 'https://images.pexels.com/photos/3997971/pexels-photo-3997971.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 56
    },
    {
      id: 5,
      category: 'nail-art',
      title: 'Геометрический дизайн',
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 63
    },
    {
      id: 6,
      category: 'pedicure',
      title: 'Летний педикюр',
      image: 'https://images.pexels.com/photos/3997965/pexels-photo-3997965.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 41
    },
    {
      id: 7,
      category: 'gel-polish',
      title: 'Омбре маникюр',
      image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 58
    },
    {
      id: 8,
      category: 'nail-art',
      title: 'Мраморный эффект',
      image: 'https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 67
    }
  ];

  const filters = [
    { id: 'all', label: 'Все работы', count: portfolioItems.length },
    { id: 'gel-polish', label: 'Гель-лак', count: portfolioItems.filter(item => item.category === 'gel-polish').length },
    { id: 'nail-art', label: 'Дизайн', count: portfolioItems.filter(item => item.category === 'nail-art').length },
    { id: 'extensions', label: 'Наращивание', count: portfolioItems.filter(item => item.category === 'extensions').length },
    { id: 'pedicure', label: 'Педикюр', count: portfolioItems.filter(item => item.category === 'pedicure').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Портфолио работ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите на наши лучшие работы и выберите стиль для себя
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-white">
                      <Heart className="w-4 h-4 text-pink-400 fill-current" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                    <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-opacity-30 transition-all duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Посмотреть все работы
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;