import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Calendar, Star, Gift, Edit2, Save, X, Award, Clock, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PageTransition from '../components/PageTransition';

const ProfilePage: React.FC = () => {
  const { user, updateProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || ''
  });

  const appointments = [
    {
      id: 1,
      service: 'Покрытие гель-лак',
      date: '2024-02-15',
      time: '14:00',
      status: 'completed',
      price: 2000,
      rating: 5
    },
    {
      id: 2,
      service: 'Наращивание ногтей',
      date: '2024-01-20',
      time: '16:00',
      status: 'completed',
      price: 3000,
      rating: 5
    },
    {
      id: 3,
      service: 'Классический маникюр',
      date: '2024-03-10',
      time: '15:00',
      status: 'upcoming',
      price: 1500
    }
  ];

  const loyaltyLevels = [
    { level: 0, name: 'Новичок', visits: 0, discount: 0, color: 'gray' },
    { level: 1, name: 'Постоянный', visits: 5, discount: 5, color: 'blue' },
    { level: 2, name: 'VIP', visits: 10, discount: 10, color: 'purple' },
    { level: 3, name: 'Платиновый', visits: 20, discount: 15, color: 'yellow' },
    { level: 4, name: 'Бриллиантовый', visits: 50, discount: 20, color: 'pink' }
  ];

  const currentLevel = loyaltyLevels[user?.loyaltyLevel || 0];
  const nextLevel = loyaltyLevels[(user?.loyaltyLevel || 0) + 1];

  const handleSave = () => {
    updateProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: user?.name || '',
      phone: user?.phone || '',
      email: user?.email || ''
    });
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Завершено';
      case 'upcoming': return 'Предстоящий';
      case 'cancelled': return 'Отменено';
      default: return 'Неизвестно';
    }
  };

  if (!user) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Доступ запрещен</h1>
            <p className="text-gray-600">Войдите в систему для просмотра профиля</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-6 mb-6 md:mb-0">
                  <div className="relative">
                    <img
                      src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=ec4899&color=fff&size=128`}
                      alt={user.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-pink-200"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold bg-${currentLevel.color}-500`}>
                      {currentLevel.level}
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        С {new Date(user.registrationDate).toLocaleDateString('ru-RU')}
                      </span>
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {currentLevel.name}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Выйти
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-1 space-y-6">
                {/* Personal Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Личная информация</h2>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="text-pink-600 hover:text-pink-700 transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSave}
                          className="text-green-600 hover:text-green-700 transition-colors"
                        >
                          <Save className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-gray-600 hover:text-gray-700 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <User className="w-4 h-4 inline mr-2" />
                        Имя
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editData.name}
                          onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        />
                      ) : (
                        <p className="text-gray-800">{user.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        />
                      ) : (
                        <p className="text-gray-800">{user.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Телефон
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={editData.phone}
                          onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        />
                      ) : (
                        <p className="text-gray-800">{user.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Loyalty Program */}
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg p-6 border border-pink-200">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Gift className="w-6 h-6 text-pink-600 mr-2" />
                    Программа лояльности
                  </h2>
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-white font-semibold bg-${currentLevel.color}-500 mb-2`}>
                      <Award className="w-5 h-5 mr-2" />
                      {currentLevel.name}
                    </div>
                    <p className="text-gray-600">Скидка {currentLevel.discount}%</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Посещений:</span>
                      <span className="font-semibold">{user.totalVisits}</span>
                    </div>
                    
                    {nextLevel && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span>До следующего уровня:</span>
                          <span className="font-semibold">{nextLevel.visits - user.totalVisits}</span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(user.totalVisits / nextLevel.visits) * 100}%` }}
                          ></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Статистика</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">{user.totalVisits}</div>
                      <div className="text-sm text-gray-600">Посещений</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">{user.nextDiscount}%</div>
                      <div className="text-sm text-gray-600">Скидка</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Appointments History */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <Clock className="w-6 h-6 text-pink-600 mr-2" />
                    История записей
                  </h2>

                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <motion.div
                        key={appointment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-800">{appointment.service}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                            {getStatusText(appointment.status)}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="block font-medium">Дата</span>
                            {new Date(appointment.date).toLocaleDateString('ru-RU')}
                          </div>
                          <div>
                            <span className="block font-medium">Время</span>
                            {appointment.time}
                          </div>
                          <div>
                            <span className="block font-medium">Стоимость</span>
                            {appointment.price}₽
                          </div>
                          {appointment.rating && (
                            <div>
                              <span className="block font-medium">Оценка</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < appointment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Favorite Services */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <Heart className="w-6 h-6 text-pink-600 mr-2" />
                    Любимые услуги
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Покрытие гель-лак</h3>
                      <p className="text-sm text-gray-600 mb-3">Заказывали 3 раза</p>
                      <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all">
                        Записаться снова
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Наращивание ногтей</h3>
                      <p className="text-sm text-gray-600 mb-3">Заказывали 2 раза</p>
                      <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all">
                        Записаться снова
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilePage;