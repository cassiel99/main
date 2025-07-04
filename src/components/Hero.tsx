import React from 'react';
import { Calendar, Star, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Профессиональный маникюр
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Создаю идеальные ногти с индивидуальным подходом к каждому клиенту. 
              Качественные материалы, современные технологии и многолетний опыт.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-medium">5.0 рейтинг</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Award className="w-5 h-5 text-pink-500" />
                <span className="font-medium">500+ клиентов</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Calendar className="w-5 h-5 inline mr-2" />
                Записаться на приём
              </button>
              <button className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-200">
                Посмотреть работы
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nail art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">15+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;