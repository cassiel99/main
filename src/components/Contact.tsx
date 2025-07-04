import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form data:', formData);
    alert('Спасибо за ваше сообщение! Мы ответим в ближайшее время.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Как с нами связаться
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                    <p className="text-sm text-gray-500">Звоните с 9:00 до 20:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">nailmaster@example.com</p>
                    <p className="text-sm text-gray-500">Ответим в течение 24 часов</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Красивая, д. 10</p>
                    <p className="text-sm text-gray-500">Метро «Красивая», 3 минуты пешком</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Время работы</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Пн-Пт: 9:00 - 20:00</p>
                      <p>Сб: 10:00 - 18:00</p>
                      <p>Вс: Выходной</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-600 mb-2">Карта проезда</h4>
              <p className="text-gray-500">Интерактивная карта с маршрутом</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Обратная связь
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тема сообщения
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                >
                  <option value="">Выберите тему</option>
                  <option value="booking">Запись на приём</option>
                  <option value="consultation">Консультация</option>
                  <option value="cooperation">Сотрудничество</option>
                  <option value="complaint">Жалоба</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                  placeholder="Напишите ваше сообщение..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Отправить сообщение</span>
              </button>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Мы в социальных сетях
          </h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-pink-100 hover:bg-pink-200 p-4 rounded-full transition-colors">
              <MessageCircle className="w-6 h-6 text-pink-600" />
            </a>
            <a href="#" className="bg-pink-100 hover:bg-pink-200 p-4 rounded-full transition-colors">
              <Phone className="w-6 h-6 text-pink-600" />
            </a>
            <a href="#" className="bg-pink-100 hover:bg-pink-200 p-4 rounded-full transition-colors">
              <Mail className="w-6 h-6 text-pink-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;