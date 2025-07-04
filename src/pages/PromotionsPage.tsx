import React from 'react';
import { Gift, Clock, Users, Sparkles, Calendar, Star, Check } from 'lucide-react';

const PromotionsPage: React.FC = () => {
  const currentPromotions = [
    {
      id: 1,
      title: 'Первое посещение',
      discount: '20%',
      description: 'Скидка 20% на первый визит для новых клиентов',
      conditions: 'Действует на все виды услуг',
      icon: <Gift className="w-8 h-8 text-pink-500" />,
      color: 'from-pink-500 to-rose-500',
      validity: 'Постоянно',
      code: 'FIRST20',
      featured: true
    },
    {
      id: 2,
      title: 'Комплексный уход',
      discount: '15%',
      description: 'Скидка при заказе маникюра + педикюра',
      conditions: 'Услуги должны быть выполнены в один день',
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      color: 'from-purple-500 to-pink-500',
      validity: 'До 31 марта',
      code: 'COMPLEX15'
    },
    {
      id: 3,
      title: 'Счастливые часы',
      discount: '10%',
      description: 'Скидка на все услуги с 10:00 до 14:00',
      conditions: 'Только в будние дни',
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-purple-500',
      validity: 'Постоянно',
      code: 'HAPPY10'
    },
    {
      id: 4,
      title: 'Приведи друга',
      discount: '500₽',
      description: 'Скидка 500₽ за каждого приведённого друга',
      conditions: 'Скидка действует после посещения друга',
      icon: <Users className="w-8 h-8 text-green-500" />,
      color: 'from-green-500 to-blue-500',
      validity: 'Постоянно',
      code: 'FRIEND500'
    }
  ];

  const seasonalPromotions = [
    {
      title: 'Весенняя акция',
      description: 'Скидка 25% на nail-дизайн с цветочными мотивами',
      period: '1-31 марта',
      image: 'https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Летние краски',
      description: 'Яркие цвета гель-лака со скидкой 20%',
      period: '1 июня - 31 августа',
      image: 'https://images.pexels.com/photos/3997971/pexels-photo-3997971.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Осенний уют',
      description: 'Тёплые оттенки и укрепление ногтей -15%',
      period: '1 сентября - 30 ноября',
      image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const loyaltyProgram = {
    levels: [
      { visits: 5, discount: 5, benefits: ['Скидка 5%', 'SMS-уведомления'] },
      { visits: 10, discount: 10, benefits: ['Скидка 10%', 'Приоритетная запись', 'Подарок на день рождения'] },
      { visits: 20, discount: 15, benefits: ['Скидка 15%', 'Бесплатная консультация', 'Эксклюзивные предложения'] },
      { visits: 50, discount: 20, benefits: ['Скидка 20%', 'VIP-обслуживание', 'Персональный менеджер'] }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Акции и спецпредложения
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Воспользуйтесь выгодными предложениями и экономьте на наших услугах
            </p>
          </div>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Действующие акции
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные предложения, которыми можно воспользоваться прямо сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPromotions.map((promo) => (
              <div key={promo.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${promo.featured ? 'border-pink-300' : 'border-gray-100'} relative`}>
                {promo.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Хит</span>
                    </div>
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${promo.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-3">
                      {promo.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{promo.discount}</div>
                      <div className="text-sm opacity-90">скидка</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-sm opacity-90">{promo.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Условия:</h4>
                    <p className="text-sm text-gray-600">{promo.conditions}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Действует до:</span>
                      <span className="text-sm font-medium text-gray-800">{promo.validity}</span>
                    </div>
                    {promo.code && (
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <span className="text-xs text-gray-500">Промокод:</span>
                        <div className="font-mono font-bold text-pink-600">{promo.code}</div>
                      </div>
                    )}
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${promo.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200`}>
                    Воспользоваться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Promotions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Сезонные предложения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специальные акции, приуроченные к временам года
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seasonalPromotions.map((promo, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="flex items-center space-x-2 text-pink-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{promo.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Программа лояльности
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Чем больше посещений, тем больше привилегий и скидок
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loyaltyProgram.levels.map((level, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-pink-200">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">{level.visits}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {level.visits} посещений
                    </h3>
                    <div className="text-2xl font-bold text-pink-600 mb-2">
                      {level.discount}% скидка
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Как работает программа лояльности?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <p className="text-pink-100">Посещайте наш салон и накапливайте визиты</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <p className="text-pink-100">Получайте скидки и дополнительные привилегии</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <p className="text-pink-100">Наслаждайтесь VIP-обслуживанием</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Эксклюзивные предложения
              </h2>
              <p className="text-xl text-gray-600">
                Специальные акции для особых случаев
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <Gift className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Подарочные сертификаты
                  </h3>
                  <p className="text-gray-600">
                    Идеальный подарок для близких людей
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Любой номинал от 1000₽</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Срок действия 1 год</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Красивое оформление</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200">
                  Купить сертификат
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <Users className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Корпоративные скидки
                  </h3>
                  <p className="text-gray-600">
                    Специальные условия для компаний
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Скидка от 15% для сотрудников</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Выездное обслуживание</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Индивидуальные условия</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  Узнать подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionsPage;