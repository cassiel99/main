import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-pink-500" />,
      title: "Сертифицированный мастер",
      description: "Диплом об окончании курсов маникюра, регулярное повышение квалификации"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "500+ довольных клиентов",
      description: "Постоянная клиентская база и множество положительных отзывов"
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-500" />,
      title: "15 лет опыта",
      description: "Многолетний опыт работы в сфере nail-индустрии"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Индивидуальный подход",
      description: "Учитываю особенности каждого клиента и его пожелания"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              О мастере
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Привет! Меня зовут Анна, и я профессиональный мастер маникюра с 15-летним опытом работы. 
              Моя страсть к созданию красивых ногтей началась еще в юности, и за эти годы я помогла 
              сотням клиентов обрести уверенность в себе.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Я постоянно изучаю новые техники и тенденции в nail-индустрии, использую только 
              качественные материалы и стерильные инструменты. Для меня важен не только результат, 
              но и комфорт клиента во время процедуры.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-pink-50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Мастер маникюра"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">★★★★★</div>
                <div className="text-sm text-gray-600">Рейтинг 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;