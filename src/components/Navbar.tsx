import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/#hero' },
    { name: 'عن المدرب', href: '/#about' },
    { name: 'البرامج', href: '/#levels' },
    { name: 'الأسعار', href: '/#pricing' },
    { name: 'التقييمات', href: '/#testimonials' },
    { name: 'تواصل معنا', href: '/#contact' },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center"
            >
              <Dumbbell className="w-5 h-5 text-black" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gold">حسان</span>
              <span className="text-white"> طلحة</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{profile?.full_name || 'لوحة التحكم'}</span>
                </Link>
                {profile?.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-sm text-electric-green hover:text-white transition-colors"
                  >
                    الإدارة
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>خروج</span>
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm text-gray-300 hover:text-gold transition-colors font-medium"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold text-sm hover:shadow-lg hover:shadow-gold/30 transition-all"
                >
                  ابدأ رحلتك
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-gold transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-gold"
                    >
                      لوحة التحكم
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }}
                      className="block text-red-400 hover:text-red-300"
                    >
                      تسجيل الخروج
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-gold"
                    >
                      تسجيل الدخول
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold"
                    >
                      ابدأ رحلتك
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
