import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Екатерина М.',
      rating: 5,
      text: 'Анна - мастер от Бога! Делаю у неё маникюр уже 2 года. Всегда безупречный результат, руки выглядят великолепно. Очень аккуратная работа и приятная атмосфера.',
      date: '2 недели назад',
      service: 'Гель-лак + дизайн',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Мария К.',
      rating: 5,
      text: 'Превосходный сервис! Анна очень внимательна к деталям, всегда подскажет что лучше подойдёт. Маникюр держится отлично, уже месяц прошёл - как новый!',
      date: '1 месяц назад',
      service: 'Укрепление + покрытие',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      name: 'Анастасия В.',
      rating: 5,
      text: 'Потрясающий мастер! Сделала наращивание - результат превзошёл все ожидания. Ногти выглядят естественно и очень красиво. Обязательно вернусь!',
      date: '3 недели назад',
      service: 'Наращивание ногтей',
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 4,
      name: 'Ольга Д.',
      rating: 5,
      text: 'Хожу к Анне уже полгода. Всегда качественно, быстро и красиво. Очень довольна результатом каждый раз. Рекомендую всем подругам!',
      date: '1 неделя назад',
      service: 'Классический маникюр',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 5,
      name: 'Виктория С.',
      rating: 5,
      text: 'Анна - профессионал своего дела. Педикюр делает идеально, ноги выглядят потрясающе. Очень чистый кабинет, стерильные инструменты.',
      date: '2 месяца назад',
      service: 'Педикюр',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 6,
      name: 'Дарья А.',
      rating: 5,
      text: 'Замечательный мастер! Сделала сложный дизайн - получилось именно то, что я хотела. Работа выполнена на высшем уровне.',
      date: '10 дней назад',
      service: 'Nail-дизайн',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Что говорят наши клиенты о качестве работы
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-800">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600">({reviews.length} отзывов)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <div className="mb-4">
                <Quote className="w-6 h-6 text-pink-300 mb-2" />
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>

              <div className="border-t pt-4">
                <span className="text-sm text-pink-600 font-medium bg-pink-50 px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Оставить отзыв
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;