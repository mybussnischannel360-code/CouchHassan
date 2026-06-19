import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-gold">حسان</span>
                <span className="text-white"> طلحة</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              مدرب كاليستينيكس محترف مكرس لمساعدتك على إتقان جسدك وتحقيق إمكاناتك الحقيقية.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">البرامج</h4>
            <ul className="space-y-3">
              <li><Link to="/beginner" className="text-gray-400 hover:text-gold transition-colors text-sm">مبتدئ</Link></li>
              <li><Link to="/intermediate" className="text-gray-400 hover:text-gold transition-colors text-sm">متوسط</Link></li>
              <li><Link to="/advanced" className="text-gray-400 hover:text-gold transition-colors text-sm">متقدم</Link></li>
              <li><Link to="/elite" className="text-gray-400 hover:text-gold transition-colors text-sm">رياضي محترف</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors text-sm">عن المدرب</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-gold transition-colors text-sm">التقييمات</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-gold transition-colors text-sm">خطط الاشتراك</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-gold transition-colors text-sm">أسئلة شائعة</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors text-sm">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">تواصل</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">coach@hassantalha.com</li>
              <li className="text-gray-400 text-sm">+1 (555) 123-4567</li>
            </ul>
            <div className="mt-6">
              <h5 className="text-white font-medium mb-3 text-sm">النشرة البريدية</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:border-gold focus:outline-none"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} حسان طلحة كاليستينيكس. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">سياسة الخصوصية</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
