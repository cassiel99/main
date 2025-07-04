import React, { useState } from 'react';
import { Filter, Heart, Eye, Search } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const portfolioItems = [
    {
      id: 1,
      category: 'gel-polish',
      title: 'Нюдовый маникюр',
      description: 'Классический нюдовый оттенок с глянцевым покрытием',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 45,
      tags: ['нюд', 'классика', 'офисный']
    },
    {
      id: 2,
      category: 'nail-art',
      title: 'Цветочный дизайн',
      description: 'Ручная роспись с нежными цветами',
      image: 'https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 72,
      tags: ['цветы', 'роспись', 'весна']
    },
    {
      id: 3,
      category: 'extensions',
      title: 'Наращивание гелем',
      description: 'Длинные ногти миндалевидной формы',
      image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 38,
      tags: ['наращивание', 'миндаль', 'длинные']
    },
    {
      id: 4,
      category: 'gel-polish',
      title: 'Глиттерный маникюр',
      description: 'Праздничный дизайн с блестками',
      image: 'https://images.pexels.com/photos/3997971/pexels-photo-3997971.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 56,
      tags: ['глиттер', 'праздник', 'блестки']
    },
    {
      id: 5,
      category: 'nail-art',
      title: 'Геометрический дизайн',
      description: 'Современный геометрический паттерн',
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 63,
      tags: ['геометрия', 'современный', 'линии']
    },
    {
      id: 6,
      category: 'pedicure',
      title: 'Летний педикюр',
      description: 'Яркий летний дизайн для ног',
      image: 'https://images.pexels.com/photos/3997965/pexels-photo-3997965.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 41,
      tags: ['лето', 'яркий', 'педикюр']
    },
    {
      id: 7,
      category: 'gel-polish',
      title: 'Омбре маникюр',
      description: 'Плавный градиентный переход цветов',
      image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 58,
      tags: ['омбре', 'градиент', 'переход']
    },
    {
      id: 8,
      category: 'nail-art',
      title: 'Мраморный эффект',
      description: 'Элегантный мраморный дизайн',
      image: 'https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 67,
      tags: ['мрамор', 'элегантный', 'текстура']
    },
    {
      id: 9,
      category: 'nail-art',
      title: 'Французский маникюр',
      description: 'Классический френч с изюминкой',
      image: 'https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 49,
      tags: ['френч', 'классика', 'белый']
    },
    {
      id: 10,
      category: 'extensions',
      title: 'Стилеты с дизайном',
      description: 'Острые ногти с художественной росписью',
      image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 84,
      tags: ['стилеты', 'острые', 'роспись']
    },
    {
      id: 11,
      category: 'gel-polish',
      title: 'Матовое покрытие',
      description: 'Стильный матовый финиш',
      image: 'https://images.pexels.com/photos/3997971/pexels-photo-3997971.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 52,
      tags: ['матовый', 'стильный', 'финиш']
    },
    {
      id: 12,
      category: 'nail-art',
      title: 'Новогодний дизайн',
      description: 'Праздничный дизайн со снежинками',
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 91,
      tags: ['новый год', 'снежинки', 'праздник']
    }
  ];

  const filters = [
    { id: 'all', label: 'Все работы', count: portfolioItems.length },
    { id: 'gel-polish', label: 'Гель-лак', count: portfolioItems.filter(item => item.category === 'gel-polish').length },
    { id: 'nail-art', label: 'Дизайн', count: portfolioItems.filter(item => item.category === 'nail-art').length },
    { id: 'extensions', label: 'Наращивание', count: portfolioItems.filter(item => item.category === 'extensions').length },
    { id: 'pedicure', label: 'Педикюр', count: portfolioItems.filter(item => item.category === 'pedicure').length }
  ];

  const filteredItems = portfolioItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Портфолио работ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Посмотрите на наши лучшие работы и найдите вдохновение для своего следующего маникюра
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск по работам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
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
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Найдено работ: <span className="font-semibold text-pink-600">{filteredItems.length}</span>
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-sm mb-3">{item.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="bg-pink-500 bg-opacity-80 text-white text-xs px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
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

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-pink-500" />
                      <span className="text-sm text-gray-600">{item.likes}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Работы не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить критерии поиска или фильтры</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredItems.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                Загрузить ещё работы
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Больше работ в Instagram
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Подписывайтесь на наш Instagram, чтобы видеть новые работы каждый день
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Перейти в Instagram
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;