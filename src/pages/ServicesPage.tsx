import React, { useState } from 'react';
import { Check, Clock, Sparkles, Filter } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      category: 'manicure',
      name: "Классический маникюр",
      price: "от 1500 ₽",
      duration: "60 мин",
      description: "Обрезной маникюр с обработкой кутикулы, придание формы ногтям и полировка",
      features: [
        "Обработка кутикулы",
        "Придание формы ногтям",
        "Полировка ногтевой пластины",
        "Массаж рук с кремом",
        "Покрытие базовым лаком"
      ],
      image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      category: 'gel-polish',
      name: "Покрытие гель-лак",
      price: "от 2000 ₽",
      duration: "90 мин",
      description: "Стойкое покрытие гель-лаком с длительным эффектом до 3 недель",
      features: [
        "Подготовка ногтевой пластины",
        "Нанесение базового покрытия",
        "Цветное покрытие в 2 слоя",
        "Топовое покрытие для блеска",
        "Сушка в LED-лампе"
      ],
      image: "https://images.pexels.com/photos/3997971/pexels-photo-3997971.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: true
    },
    {
      category: 'strengthening',
      name: "Укрепление ногтей",
      price: "от 2500 ₽",
      duration: "120 мин",
      description: "Укрепление слабых и ломких ногтей специальными составами",
      features: [
        "Диагностика состояния ногтей",
        "Нанесение укрепляющих средств",
        "Защитное покрытие",
        "Рекомендации по домашнему уходу",
        "Витаминный комплекс для ногтей"
      ],
      image: "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      category: 'extensions',
      name: "Наращивание ногтей",
      price: "от 3000 ₽",
      duration: "150 мин",
      description: "Наращивание ногтей гелем или акрилом с любым дизайном",
      features: [
        "Подготовка натуральных ногтей",
        "Наращивание выбранным материалом",
        "Придание желаемой формы",
        "Дизайн по вашему желанию",
        "Финишное покрытие"
      ],
      image: "https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      category: 'design',
      name: "Nail-дизайн",
      price: "от 500 ₽",
      duration: "30-60 мин",
      description: "Художественный дизайн ногтей: рисунки, стразы, фольга, градиент",
      features: [
        "Ручная художественная роспись",
        "Декор стразами и камнями",
        "Работа с фольгой и блестками",
        "Градиентные переходы",
        "Эксклюзивные авторские рисунки"
      ],
      image: "https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      category: 'pedicure',
      name: "Педикюр классический",
      price: "от 2200 ₽",
      duration: "90 мин",
      description: "Классический педикюр с обработкой стоп и покрытием лаком",
      features: [
        "Ванночка для ног с морской солью",
        "Обработка ногтей на ногах",
        "Удаление огрубевшей кожи",
        "Обработка кутикулы",
        "Покрытие лаком или гель-лаком"
      ],
      image: "https://images.pexels.com/photos/3997965/pexels-photo-3997965.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      category: 'pedicure',
      name: "Аппаратный педикюр",
      price: "от 2800 ₽",
      duration: "120 мин",
      description: "Современный аппаратный педикюр с глубокой обработкой стоп",
      features: [
        "Аппаратная обработка ногтей",
        "Удаление мозолей и натоптышей",
        "Глубокая очистка кожи стоп",
        "Полировка пяток",
        "Увлажняющий уход"
      ],
      image: "https://images.pexels.com/photos/3997965/pexels-photo-3997965.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      category: 'manicure',
      name: "Аппаратный маникюр",
      price: "от 1800 ₽",
      duration: "75 мин",
      description: "Безопасный аппаратный маникюр без использования режущих инструментов",
      features: [
        "Обработка кутикулы аппаратом",
        "Шлифовка ногтевой пластины",
        "Придание идеальной формы",
        "Полировка до блеска",
        "Питательный уход для рук"
      ],
      image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      category: 'design',
      name: "Френч маникюр",
      price: "от 2200 ₽",
      duration: "90 мин",
      description: "Классический французский маникюр в различных вариациях",
      features: [
        "Классический белый френч",
        "Цветной френч",
        "Обратный френч",
        "Френч с дизайном",
        "Идеальная линия улыбки"
      ],
      image: "https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const categories = [
    { id: 'all', label: 'Все услуги', count: services.length },
    { id: 'manicure', label: 'Маникюр', count: services.filter(s => s.category === 'manicure').length },
    { id: 'gel-polish', label: 'Гель-лак', count: services.filter(s => s.category === 'gel-polish').length },
    { id: 'design', label: 'Дизайн', count: services.filter(s => s.category === 'design').length },
    { id: 'extensions', label: 'Наращивание', count: services.filter(s => s.category === 'extensions').length },
    { id: 'strengthening', label: 'Укрепление', count: services.filter(s => s.category === 'strengthening').length },
    { id: 'pedicure', label: 'Педикюр', count: services.filter(s => s.category === 'pedicure').length }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр профессиональных услуг для красоты и здоровья ваших ногтей
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative border border-gray-100">
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

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Важная информация об услугах
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Подготовка к процедуре</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Не используйте крем для рук за 2 часа до процедуры</li>
                  <li>• Снимите старое покрытие заранее (по желанию)</li>
                  <li>• Сообщите о аллергических реакциях</li>
                  <li>• Приходите за 5 минут до назначенного времени</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Уход после процедуры</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Избегайте контакта с водой первые 2 часа</li>
                  <li>• Используйте масло для кутикулы ежедневно</li>
                  <li>• Носите перчатки при уборке</li>
                  <li>• Записывайтесь на коррекцию через 2-3 недели</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;