import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, Filter, Calendar } from 'lucide-react';

const ReviewsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: 1,
      name: 'Екатерина М.',
      rating: 5,
      text: 'Анна - мастер от Бога! Делаю у неё маникюр уже 2 года. Всегда безупречный результат, руки выглядят великолепно. Очень аккуратная работа и приятная атмосфера. Рекомендую всем подругам!',
      date: '2024-01-15',
      service: 'Гель-лак + дизайн',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      name: 'Мария К.',
      rating: 5,
      text: 'Превосходный сервис! Анна очень внимательна к деталям, всегда подскажет что лучше подойдёт. Маникюр держится отлично, уже месяц прошёл - как новый! Салон очень чистый, инструменты стерильные.',
      date: '2024-01-10',
      service: 'Укрепление + покрытие',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200',
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      name: 'Анастасия В.',
      rating: 5,
      text: 'Потрясающий мастер! Сделала наращивание - результат превзошёл все ожидания. Ногти выглядят естественно и очень красиво. Анна объяснила как ухаживать. Обязательно вернусь!',
      date: '2024-01-08',
      service: 'Наращивание ногтей',
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200',
      helpful: 15,
      verified: true
    },
    {
      id: 4,
      name: 'Ольга Д.',
      rating: 5,
      text: 'Хожу к Анне уже полгода. Всегда качественно, быстро и красиво. Очень довольна результатом каждый раз. Цены адекватные, качество на высоте. Рекомендую всем подругам!',
      date: '2024-01-05',
      service: 'Классический маникюр',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      helpful: 6,
      verified: true
    },
    {
      id: 5,
      name: 'Виктория С.',
      rating: 5,
      text: 'Анна - профессионал своего дела. Педикюр делает идеально, ноги выглядят потрясающе. Очень чистый кабинет, стерильные инструменты. Приятная атмосфера и доступные цены.',
      date: '2024-01-03',
      service: 'Педикюр',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200',
      helpful: 9,
      verified: true
    },
    {
      id: 6,
      name: 'Дарья А.',
      rating: 5,
      text: 'Замечательный мастер! Сделала сложный дизайн - получилось именно то, что я хотела. Работа выполнена на высшем уровне. Анна очень терпеливая и внимательная к пожеланиям.',
      date: '2024-01-01',
      service: 'Nail-дизайн',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200',
      helpful: 11,
      verified: true
    },
    {
      id: 7,
      name: 'Светлана П.',
      rating: 5,
      text: 'Отличный мастер! Делала френч - получился очень аккуратный и красивый. Анна профессионал, работает быстро и качественно. Обязательно приду ещё!',
      date: '2023-12-28',
      service: 'Французский маникюр',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      helpful: 7,
      verified: true
    },
    {
      id: 8,
      name: 'Алина К.',
      rating: 4,
      text: 'Хороший мастер, качественная работа. Маникюр держится долго. Единственное - немного долго ждала своей очереди, но результат того стоил.',
      date: '2023-12-25',
      service: 'Гель-лак',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      helpful: 4,
      verified: true
    }
  ];

  const services = ['all', 'Гель-лак + дизайн', 'Укрепление + покрытие', 'Наращивание ногтей', 'Классический маникюр', 'Педикюр', 'Nail-дизайн'];
  
  const filteredReviews = reviews.filter(review => 
    activeFilter === 'all' || review.service === activeFilter
  );

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Отзывы клиентов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Узнайте, что говорят наши клиенты о качестве работы и сервисе
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-6xl font-bold text-pink-600 mb-4">{averageRating.toFixed(1)}</div>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-8 h-8 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-xl text-gray-600">Средний рейтинг</p>
                <p className="text-gray-500">На основе {reviews.length} отзывов</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3">
                {ratingDistribution.map((item) => (
                  <div key={item.rating} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm font-medium">{item.rating}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-rose-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filters and Sorting */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Service Filter */}
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => setActiveFilter(service)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeFilter === service
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {service === 'all' ? 'Все услуги' : service}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Сортировать:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                  <option value="rating">По рейтингу</option>
                  <option value="helpful">По полезности</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {sortedReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Проверен
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(review.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Quote className="w-6 h-6 text-pink-300 mb-2" />
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-pink-600 font-medium bg-pink-50 px-3 py-1 rounded-full">
                      {review.service}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-pink-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{review.helpful}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Загрузить ещё отзывы
            </button>
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Поделитесь своим опытом
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Ваш отзыв поможет другим клиентам сделать правильный выбор
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
            Оставить отзыв
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;