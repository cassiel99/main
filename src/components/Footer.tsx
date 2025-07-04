import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">NM</span>
              </div>
              <h3 className="text-xl font-bold">Nail Master</h3>
            </Link>
            <p className="text-gray-400 mb-4">
              Профессиональный маникюр с индивидуальным подходом к каждому клиенту
            </p>
            <div className="flex items-center space-x-2 text-pink-400">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Создано с любовью к красоте</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-pink-400 transition-colors">Классический маникюр</Link></li>
              <li><Link to="/services" className="hover:text-pink-400 transition-colors">Покрытие гель-лак</Link></li>
              <li><Link to="/services" className="hover:text-pink-400 transition-colors">Укрепление ногтей</Link></li>
              <li><Link to="/services" className="hover:text-pink-400 transition-colors">Наращивание ногтей</Link></li>
              <li><Link to="/services" className="hover:text-pink-400 transition-colors">Nail-дизайн</Link></li>
              <li><Link to="/services" className="hover:text-pink-400 transition-colors">Педикюр</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-pink-400 transition-colors">Главная</Link></li>
              <li><Link to="/about" className="hover:text-pink-400 transition-colors">О мастере</Link></li>
              <li><Link to="/portfolio" className="hover:text-pink-400 transition-colors">Портфолио</Link></li>
              <li><Link to="/reviews" className="hover:text-pink-400 transition-colors">Отзывы</Link></li>
              <li><Link to="/booking" className="hover:text-pink-400 transition-colors">Запись</Link></li>
              <li><Link to="/contact" className="hover:text-pink-400 transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>nailmaster@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>г. Москва, ул. Красивая, д. 10</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-pink-400" />
                <span>Пн-Пт: 9:00-20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Nail Master. Все права защищены.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;