import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);

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
          <h1 className="text-3xl font-bold text-white mb-2">مرحبًا بعودتك</h1>
          <p className="text-gray-400">سجل دخولك لمتابعة رحلة تدريبك</p>
        </div>

        <div className="glass rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

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
                  className="w-full pr-12 pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all"
                  placeholder="أدخل كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5" />
                <span className="text-sm text-gray-400">تذكرني</span>
              </label>
              <a href="#" className="text-sm text-gold hover:text-gold-light transition-colors">
                نسيت كلمة المرور؟
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-50"
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-gold hover:text-gold-light transition-colors font-semibold">
                ابدأ رحلتك
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
