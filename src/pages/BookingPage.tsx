import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageCircle, Check, Star, MapPin } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    comment: '',
    isFirstVisit: false
  });

  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    { name: 'Классический маникюр', price: 1500, duration: 60 },
    { name: 'Покрытие гель-лак', price: 2000, duration: 90 },
    { name: 'Укрепление ногтей', price: 2500, duration: 120 },
    { name: 'Наращивание ногтей', price: 3000, duration: 150 },
    { name: 'Nail-дизайн', price: 500, duration: 30 },
    { name: 'Педикюр', price: 2200, duration: 90 },
    { name: 'Аппаратный маникюр', price: 1800, duration: 75 },
    { name: 'Французский маникюр', price: 2200, duration: 90 }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', 
    '17:00', '18:00', '19:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const selectedService = services.find(s => s.name === formData.service);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Онлайн-запись
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите удобное время и запишитесь на процедуру в несколько кликов
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-pink-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}>
                        1
                      </div>
                      <span className="font-medium">Услуга</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-pink-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}>
                        2
                      </div>
                      <span className="font-medium">Время</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${currentStep >= 3 ? 'text-pink-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}>
                        3
                      </div>
                      <span className="font-medium">Контакты</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Service Selection */}
                    {currentStep === 1 && (
                      <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                          Выберите услугу
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {services.map((service) => (
                            <div
                              key={service.name}
                              className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                                formData.service === service.name
                                  ? 'border-pink-500 bg-pink-50'
                                  : 'border-gray-200 hover:border-pink-300'
                              }`}
                              onClick={() => setFormData(prev => ({ ...prev, service: service.name }))}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-gray-800">{service.name}</h4>
                                <div className="text-right">
                                  <div className="text-lg font-bold text-pink-600">от {service.price}₽</div>
                                  <div className="text-sm text-gray-500">{service.duration} мин</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() => formData.service && setCurrentStep(2)}
                          disabled={!formData.service}
                          className="w-full mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Далее
                        </button>
                      </div>
                    )}

                    {/* Step 2: Date and Time */}
                    {currentStep === 2 && (
                      <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                          Выберите дату и время
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <Calendar className="w-4 h-4 inline mr-2" />
                              Дата
                            </label>
                            <input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <Clock className="w-4 h-4 inline mr-2" />
                              Время
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, time }))}
                                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    formData.time === time
                                      ? 'bg-pink-500 text-white'
                                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-4 mt-6">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            className="flex-1 border-2 border-pink-500 text-pink-500 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-200"
                          >
                            Назад
                          </button>
                          <button
                            type="button"
                            onClick={() => formData.date && formData.time && setCurrentStep(3)}
                            disabled={!formData.date || !formData.time}
                            className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Далее
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Contact Information */}
                    {currentStep === 3 && (
                      <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                          Контактная информация
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <User className="w-4 h-4 inline mr-2" />
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
                              <Phone className="w-4 h-4 inline mr-2" />
                              Телефон
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                              placeholder="+7 (999) 123-45-67"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email (необязательно)
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                              placeholder="your@email.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <MessageCircle className="w-4 h-4 inline mr-2" />
                              Комментарий (необязательно)
                            </label>
                            <textarea
                              name="comment"
                              value={formData.comment}
                              onChange={handleInputChange}
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                              placeholder="Дополнительные пожелания или вопросы..."
                            />
                          </div>

                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              name="isFirstVisit"
                              checked={formData.isFirstVisit}
                              onChange={handleInputChange}
                              className="w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                            />
                            <label className="text-sm text-gray-700">
                              Это мой первый визит (скидка 20%)
                            </label>
                          </div>
                        </div>

                        <div className="flex space-x-4 mt-6">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="flex-1 border-2 border-pink-500 text-pink-500 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-200"
                          >
                            Назад
                          </button>
                          <button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            Записаться на приём
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Booking Summary & Info */}
              <div className="space-y-6">
                {/* Booking Summary */}
                {selectedService && (
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      Ваша запись
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-600">Услуга:</span>
                        <div className="font-semibold text-gray-800">{selectedService.name}</div>
                      </div>
                      {formData.date && (
                        <div>
                          <span className="text-gray-600">Дата:</span>
                          <div className="font-semibold text-gray-800">
                            {new Date(formData.date).toLocaleDateString('ru-RU', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                      )}
                      {formData.time && (
                        <div>
                          <span className="text-gray-600">Время:</span>
                          <div className="font-semibold text-gray-800">{formData.time}</div>
                        </div>
                      )}
                      <div>
                        <span className="text-gray-600">Длительность:</span>
                        <div className="font-semibold text-gray-800">{selectedService.duration} минут</div>
                      </div>
                      <div className="border-t pt-3">
                        <span className="text-gray-600">Стоимость:</span>
                        <div className="text-2xl font-bold text-pink-600">
                          {formData.isFirstVisit ? Math.round(selectedService.price * 0.8) : selectedService.price}₽
                          {formData.isFirstVisit && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              {selectedService.price}₽
                            </span>
                          )}
                        </div>
                        {formData.isFirstVisit && (
                          <div className="text-sm text-green-600 font-medium">
                            Скидка 20% для новых клиентов
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Booking Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Информация о записи
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">Подтверждение записи в течение 30 минут</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">Возможность переноса за 24 часа</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">Напоминание за день до визита</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">Консультация перед процедурой</span>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Время работы
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Понедельник - Пятница</span>
                      <span className="font-medium">9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Суббота</span>
                      <span className="font-medium">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Воскресенье</span>
                      <span className="font-medium">Выходной</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">
                    Экстренная связь
                  </h3>
                  <p className="mb-4 text-pink-100">
                    Если вам нужно срочно записаться или перенести запись:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span className="font-bold">+7 (999) 123-45-67</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>г. Москва, ул. Красивая, д. 10</span>
                    </div>
                  </div>
                </div>

                {/* Reviews Preview */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Отзывы клиентов
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600">5.0 (127 отзывов)</span>
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "Анна - мастер от Бога! Всегда безупречный результат..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;