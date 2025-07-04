import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, Award, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const HomePage: React.FC = () => {
  const featuredServices = [
    {
      name: "Покрытие гель-лак",
      price: "от 2000 ₽",
      image: "https://images.pexels.com/photos/3997971/pexels-photo-3997971.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: true
    },
    {
      name: "Наращивание ногтей",
      price: "от 3000 ₽",
      image: "https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Nail-дизайн",
      price: "от 500 ₽",
      image: "https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const quickStats = [
    { number: "500+", label: "Довольных клиентов" },
    { number: "15", label: "Лет опыта" },
    { number: "5.0", label: "Рейтинг" },
    { number: "24/7", label: "Поддержка" }
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Профессиональный маникюр
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Создаю идеальные ногти с индивидуальным подходом к каждому клиенту. 
                  Качественные материалы, современные технологии и многолетний опыт.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <motion.div 
                    className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-medium">5.0 рейтинг</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="w-5 h-5 text-pink-500" />
                    <span className="font-medium">500+ клиентов</span>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/booking"
                      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Записаться на приём
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/portfolio"
                      className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-200 text-center inline-block"
                    >
                      Посмотреть работы
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Nail art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600">15+</div>
                    <div className="text-sm text-gray-600">лет опыта</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
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
                Популярные услуги
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Самые востребованные процедуры для красоты ваших ногтей
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
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
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                      <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to="/booking"
                        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 hover:shadow-lg block text-center"
                      >
                        Записаться
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/services"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Все услуги</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Мастер маникюра"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  Анна - ваш мастер
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Профессиональный мастер маникюра с 15-летним опытом работы. 
                  Моя страсть к созданию красивых ногтей началась еще в юности, 
                  и за эти годы я помогла сотням клиентов обрести уверенность в себе.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Постоянно изучаю новые техники и тенденции в nail-индустрии, 
                  использую только качественные материалы и стерильные инструменты.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/about"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span>Узнать больше</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Готовы к преображению?
              </h2>
              <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                Запишитесь на процедуру прямо сейчас и получите скидку 20% на первое посещение
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/booking"
                  className="inline-flex items-center space-x-2 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Записаться сейчас</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomePage;