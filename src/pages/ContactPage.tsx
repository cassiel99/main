import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Star, Navigation } from 'lucide-react';

const ContactPage: React.FC = () => {
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

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-pink-600" />,
      title: "Телефон",
      primary: "+7 (999) 123-45-67",
      secondary: "Звоните с 9:00 до 20:00",
      action: "tel:+79991234567"
    },
    {
      icon: <Mail className="w-6 h-6 text-pink-600" />,
      title: "Email",
      primary: "nailmaster@example.com",
      secondary: "Ответим в течение 24 часов",
      action: "mailto:nailmaster@example.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-600" />,
      title: "WhatsApp",
      primary: "+7 (999) 123-45-67",
      secondary: "Быстрые ответы в мессенджере",
      action: "https://wa.me/79991234567"
    },
    {
      icon: <MapPin className="w-6 h-6 text-pink-600" />,
      title: "Адрес",
      primary: "г. Москва, ул. Красивая, д. 10",
      secondary: "Метро «Красивая», 3 минуты пешком",
      action: "#"
    }
  ];

  const workingHours = [
    { day: "Понедельник", hours: "9:00 - 20:00" },
    { day: "Вторник", hours: "9:00 - 20:00" },
    { day: "Среда", hours: "9:00 - 20:00" },
    { day: "Четверг", hours: "9:00 - 20:00" },
    { day: "Пятница", hours: "9:00 - 20:00" },
    { day: "Суббота", hours: "10:00 - 18:00" },
    { day: "Воскресенье", hours: "Выходной" }
  ];

  const faqItems = [
    {
      question: "Как записаться на приём?",
      answer: "Вы можете записаться через форму онлайн-записи на сайте, по телефону или в WhatsApp."
    },
    {
      question: "Можно ли перенести запись?",
      answer: "Да, запись можно перенести не позднее чем за 24 часа до назначенного времени."
    },
    {
      question: "Какие материалы вы используете?",
      answer: "Мы используем только качественные материалы проверенных брендов: CND, OPI, Gelish."
    },
    {
      question: "Есть ли скидки для постоянных клиентов?",
      answer: "Да, у нас действует программа лояльности со скидками от 5% до 20%."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Контакты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="bg-pink-100 p-3 rounded-full w-fit mb-4 group-hover:bg-pink-200 transition-colors">
                  {method.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-800 font-medium mb-1">{method.primary}</p>
                <p className="text-sm text-gray-500">{method.secondary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Напишите нам
                </h2>
                <p className="text-gray-600 mb-8">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </p>
                
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    >
                      <option value="">Выберите тему</option>
                      <option value="booking">Запись на приём</option>
                      <option value="consultation">Консультация</option>
                      <option value="cooperation">Сотрудничество</option>
                      <option value="complaint">Жалоба</option>
                      <option value="suggestion">Предложение</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
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

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Working Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <Clock className="w-6 h-6 text-pink-600 mr-2" />
                    Время работы
                  </h3>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className={`font-medium ${schedule.hours === 'Выходной' ? 'text-red-500' : 'text-gray-800'}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <MapPin className="w-6 h-6 text-pink-600 mr-2" />
                    Как нас найти
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Адрес</h4>
                      <p className="text-gray-600">г. Москва, ул. Красивая, д. 10, офис 15</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Метро</h4>
                      <p className="text-gray-600">Станция «Красивая», выход №2, 3 минуты пешком</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ориентиры</h4>
                      <p className="text-gray-600">Рядом с торговым центром «Красота», вход со двора</p>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Navigation className="w-5 h-5" />
                      <span>Построить маршрут</span>
                    </button>
                  </div>
                </div>

                {/* Reviews Preview */}
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Что говорят клиенты
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600">5.0 (127 отзывов)</span>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Анна - профессионал своего дела! Всегда качественно и в срок. Рекомендую!"
                  </p>
                  <p className="text-sm text-gray-500">— Екатерина М.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Часто задаваемые вопросы
              </h2>
              <p className="text-xl text-gray-600">
                Ответы на самые популярные вопросы наших клиентов
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Мы в социальных сетях
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Подписывайтесь на наши аккаунты, чтобы быть в курсе новостей и акций
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-full transition-all duration-200 backdrop-blur-sm">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-full transition-all duration-200 backdrop-blur-sm">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-full transition-all duration-200 backdrop-blur-sm">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;