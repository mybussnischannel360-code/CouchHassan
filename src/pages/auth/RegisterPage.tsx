import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signUp(email, password, fullName);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gold">حسان</span>
              <span className="text-white"> طلحة</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">ابدأ رحلتك</h1>
          <p className="text-gray-400">أنشئ حسابك وابدأ التحول اليوم</p>
        </div>

        <div className="glass rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm text-gray-400 mb-2">الاسم الكامل</label>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full pr-12 pl-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all"
                  placeholder="محمد أحمد"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pr-12 pl-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all"
                  placeholder="بريدك@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full pr-12 pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all"
                  placeholder="أنشئ كلمة مرور قوية"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">6 أحرف على الأقل</p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required className="w-4 h-4 mt-1 rounded border-white/20 bg-white/5" />
              <span className="text-sm text-gray-400">
                أوافق على{' '}
                <a href="#" className="text-gold hover:underline">شروط الخدمة</a>
                {' '}و{' '}
                <a href="#" className="text-gold hover:underline">سياسة الخصوصية</a>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-50"
            >
              {loading ? 'جاري إنشاء الحساب...' : 'ابدأ تجربة مجانية'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-gold hover:text-gold-light transition-colors font-semibold">
                تسجيل الدخول
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500">
              ابدأ بتجربة مجانية 7 أيام. بدون بطاقة ائتمان.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
