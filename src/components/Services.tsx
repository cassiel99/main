import React from 'react';
import { Check, Clock, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      name: "Классический маникюр",
      price: "от 1500 ₽",
      duration: "60 мин",
      description: "Обрезной маникюр с обработкой кутикулы, придание формы ногтям",
      features: [
        "Обработка кутикулы",
        "Придание формы",
        "Полировка ногтей",
        "Массаж рук"
      ],
      image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Покрытие гель-лак",
      price: "от 2000 ₽",
      duration: "90 мин",
      description: "Стойкое покрытие гель-лаком с длительным эффектом до 3 недель",
      features: [
        "Подготовка ногтей",
        "Базовое покрытие",
        "Цветное покрытие",
        "Топовое покрытие"
      ],
      image: "https://images.pexels.com/photos/3997971/pexels-photo-3997971.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: true
    },
    {
      name: "Укрепление ногтей",
      price: "от 2500 ₽",
      duration: "120 мин",
      description: "Укрепление слабых и ломких ногтей специальными составами",
      features: [
        "Диагностика состояния",
        "Укрепляющие средства",
        "Защитное покрытие",
        "Рекомендации по уходу"
      ],
      image: "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Наращивание ногтей",
      price: "от 3000 ₽",
      duration: "150 мин",
      description: "Наращивание ногтей гелем или акрилом с любым дизайном",
      features: [
        "Подготовка ногтей",
        "Наращивание материалом",
        "Придание формы",
        "Дизайн по желанию"
      ],
      image: "https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Nail-дизайн",
      price: "от 500 ₽",
      duration: "30 мин",
      description: "Художественный дизайн ногтей: рисунки, стразы, фольга",
      features: [
        "Ручная роспись",
        "Стразы и декор",
        "Фольга и блестки",
        "Эксклюзивные рисунки"
      ],
      image: "https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Педикюр",
      price: "от 2200 ₽",
      duration: "90 мин",
      description: "Аппаратный педикюр с обработкой стоп и покрытием",
      features: [
        "Обработка стоп",
        "Удаление мозолей",
        "Обработка ногтей",
        "Покрытие лаком"
      ],
      image: "https://images.pexels.com/photos/3997965/pexels-photo-3997965.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для красоты и здоровья ваших ногтей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  Популярно
                </div>
              )}
              
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 hover:shadow-lg">
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;