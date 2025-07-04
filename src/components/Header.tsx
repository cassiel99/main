import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'О мастере', href: '/about' },
    { label: 'Услуги', href: '/services' },
    { label: 'Портфолио', href: '/portfolio' },
    { label: 'Отзывы', href: '/reviews' },
    { label: 'Акции', href: '/promotions' },
    { label: 'Запись', href: '/booking' },
    { label: 'Контакты', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Main Header Row */}
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">NM</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent whitespace-nowrap">
                Nail Master
              </h1>
            </Link>

            {/* Desktop Navigation - Hidden on smaller screens */}
            <nav className="hidden xl:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium px-2 py-2 rounded-lg whitespace-nowrap text-sm ${
                    isActive(item.href) ? 'text-pink-600 bg-pink-50' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Contact Info - Hidden on mobile */}
              <div className="hidden 2xl:flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium text-sm">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium text-sm">9:00 - 20:00</span>
                </div>
              </div>
              
              {/* User Section */}
              {user ? (
                <div className="hidden lg:flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 bg-pink-50 hover:bg-pink-100 text-pink-600 px-3 py-2 rounded-full transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span className="font-medium text-sm max-w-24 truncate">{user.name}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                    title="Выйти"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="hidden lg:flex items-center space-x-2">
                  <button
                    onClick={() => openAuthModal('login')}
                    className="text-gray-700 hover:text-pink-600 font-medium transition-colors px-3 py-2 text-sm"
                  >
                    Вход
                  </button>
                  <button
                    onClick={() => openAuthModal('register')}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full font-medium hover:from-pink-600 hover:to-rose-600 transition-all text-sm"
                  >
                    Регистрация
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                className="xl:hidden p-2 flex-shrink-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="xl:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2 mb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg ${
                      isActive(item.href) ? 'text-pink-600 bg-pink-50' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile User Section */}
              <div className="pt-4 border-t">
                {user ? (
                  <div className="space-y-2">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 text-pink-600 font-medium px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      <span>{user.name}</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 text-gray-600 px-3 py-2 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Выйти</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => {
                        openAuthModal('login');
                        setIsMenuOpen(false);
                      }}
                      className="text-left text-gray-700 hover:text-pink-600 font-medium px-3 py-2 transition-colors"
                    >
                      Вход
                    </button>
                    <button
                      onClick={() => {
                        openAuthModal('register');
                        setIsMenuOpen(false);
                      }}
                      className="text-left bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-2 rounded-lg font-medium mx-3"
                    >
                      Регистрация
                    </button>
                  </div>
                )}
                
                {/* Mobile Contact Info */}
                <div className="flex flex-col space-y-2 text-gray-600 mt-4 pt-4 border-t">
                  <div className="flex items-center space-x-2 px-3">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">9:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;