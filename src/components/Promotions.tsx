import React from 'react';
import { Gift, Clock, Users, Sparkles } from 'lucide-react';

const Promotions: React.FC = () => {
  const promotions = [
    {
      id: 1,
      title: 'Первое посещение',
      discount: '20%',
      description: 'Скидка 20% на первый визит для новых клиентов',
      conditions: 'Действует на все виды услуг',
      icon: <Gift className="w-8 h-8 text-pink-500" />,
      color: 'from-pink-500 to-rose-500',
      validity: 'Постоянно'
    },
    {
      id: 2,
      title: 'Комплексный уход',
      discount: '15%',
      description: 'Скидка при заказе маникюра + педикюра',
      conditions: 'Услуги должны быть выполнены в один день',
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      color: 'from-purple-500 to-pink-500',
      validity: 'До 31 марта'
    },
    {
      id: 3,
      title: 'Счастливые часы',
      discount: '10%',
      description: 'Скидка на все услуги с 10:00 до 14:00',
      conditions: 'Только в будние дни',
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-purple-500',
      validity: 'Постоянно'
    },
    {
      id: 4,
      title: 'Приведи друга',
      discount: '500₽',
      description: 'Скидка 500₽ за каждого приведённого друга',
      conditions: 'Скидка действует после посещения друга',
      icon: <Users className="w-8 h-8 text-green-500" />,
      color: 'from-green-500 to-blue-500',
      validity: 'Постоянно'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Акции и спецпредложения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Воспользуйтесь выгодными предложениями и экономьте на наших услугах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <div key={promo.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
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
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Действует до:</span>
                  <span className="text-sm font-medium text-gray-800">{promo.validity}</span>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${promo.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200`}>
                  Воспользоваться
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Программа лояльности
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Станьте постоянным клиентом и получайте дополнительные скидки! 
            При каждом 5-м посещении - скидка 25% на любую услугу.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">5</div>
              <div className="text-sm text-gray-600">посещений</div>
            </div>
            <div className="text-pink-400">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">25%</div>
              <div className="text-sm text-gray-600">скидка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;