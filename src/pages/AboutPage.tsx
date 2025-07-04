import React from 'react';
import { Award, Users, Clock, Heart, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const AboutPage: React.FC = () => {
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

  const skills = [
    "Классический маникюр",
    "Аппаратный маникюр",
    "Покрытие гель-лак",
    "Наращивание ногтей",
    "Художественная роспись",
    "Дизайн ногтей",
    "Укрепление ногтей",
    "Педикюр",
    "Коррекция формы",
    "Лечение ногтей"
  ];

  const certifications = [
    {
      title: "Базовый курс маникюра",
      institution: "Академия красоты 'Эстетика'",
      year: "2009"
    },
    {
      title: "Наращивание ногтей гелем",
      institution: "Международная школа nail-дизайна",
      year: "2011"
    },
    {
      title: "Художественная роспись ногтей",
      institution: "Студия 'Nail Art Pro'",
      year: "2015"
    },
    {
      title: "Аппаратный маникюр",
      institution: "Центр профессионального обучения",
      year: "2018"
    },
    {
      title: "Современные техники дизайна",
      institution: "Beauty Academy Moscow",
      year: "2023"
    }
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                О мастере
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Познакомьтесь с профессиональным мастером маникюра, который создаст для вас идеальные ногти
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  Анна Петрова
                </h2>
                <div className="flex items-center mb-6">
                  <div className="flex items-center space-x-1 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">Рейтинг 5.0 (127 отзывов)</span>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Привет! Меня зовут Анна, и я профессиональный мастер маникюра с 15-летним опытом работы. 
                  Моя страсть к созданию красивых ногтей началась еще в юности, и за эти годы я помогла 
                  сотням клиентов обрести уверенность в себе.
                </p>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Я постоянно изучаю новые техники и тенденции в nail-индустрии, использую только 
                  качественные материалы и стерильные инструменты. Для меня важен не только результат, 
                  но и комфорт клиента во время процедуры.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Моя философия работы основана на индивидуальном подходе к каждому клиенту. 
                  Я внимательно выслушиваю пожелания, даю профессиональные советы и создаю 
                  дизайн, который подчеркнет вашу индивидуальность.
                </p>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Мастер маникюра Анна"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">★★★★★</div>
                    <div className="text-sm text-gray-600">Рейтинг 5.0</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {achievements.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white rounded-full shadow-md">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Профессиональные навыки
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Владею всеми современными техниками и методами nail-индустрии
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Образование и сертификаты
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Постоянное обучение и повышение квалификации для лучшего сервиса
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                        <p className="text-gray-600">{cert.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold">
                          {cert.year}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500 to-rose-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Моя философия работы
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Heart, title: "Забота", description: "Каждый клиент для меня особенный. Я создаю атмосферу комфорта и заботы." },
                  { icon: Award, title: "Качество", description: "Использую только проверенные материалы и современные технологии." },
                  { icon: Users, title: "Индивидуальность", description: "Каждый дизайн создается с учетом личности и пожеланий клиента." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <item.icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-pink-100">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;