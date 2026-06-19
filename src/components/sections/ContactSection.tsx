import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        goal: formData.goal || null,
        message: formData.message || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', goal: '', message: '' });
    } catch (err) {
      setError('حدث خطأ ما. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-electric-green/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-gold font-semibold text-sm">تواصل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">ابدأ </span>
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              رحلتك اليوم
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            مستعد لتحويل جسدك وعقلك؟ تواصل مع حسان لمناقشة أهدافك.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-electric-green/20 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-electric-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">تم إرسال الرسالة!</h3>
                  <p className="text-gray-400 mb-6">
                    شكرًا لتواصلك. سيرد حسان عليك خلال 24-48 ساعة.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">الاسم</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all"
                        placeholder="محمد أحمد"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all"
                        placeholder="mohamed@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">الهاتف (اختياري)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all"
                        placeholder="+966 50 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">هدفك</label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-gold focus:outline-none transition-all"
                      >
                        <option value="" className="bg-gray-900">اختر هدفًا</option>
                        <option value="weight-loss" className="bg-gray-900">فقدان الوزن</option>
                        <option value="muscle-gain" className="bg-gray-900">زيادة العضلات</option>
                        <option value="strength" className="bg-gray-900">بناء القوة</option>
                        <option value="skills" className="bg-gray-900">تعلم مهارات الكاليستينيكس</option>
                        <option value="flexibility" className="bg-gray-900">تحسين المرونة</option>
                        <option value="other" className="bg-gray-900">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">رسالتك</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-all resize-none"
                      placeholder="أخبرني عن أهدافك الرياضية..."
                    />
                  </div>

                  {error && (
                    <div className="text-red-400 text-sm">{error}</div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-gold/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">البريد الإلكتروني</h3>
                  <p className="text-gray-400 text-sm">coach@hassantalha.com</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-gold/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">الهاتف</h3>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-gold/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">الموقع</h3>
                  <p className="text-gray-400 text-sm">عالمي - تدريب عبر الإنترنت متاح</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-white font-semibold mb-6">تابع حسان</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:border-gold/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">انستقرام</div>
                    <div className="text-gray-500 text-xs">@hassantalha</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:border-gold/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">يوتيوب</div>
                    <div className="text-gray-500 text-xs">500K+ مشترك</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:border-gold/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">فيسبوك</div>
                    <div className="text-gray-500 text-xs">حسان طلحة</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:border-gold/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500/20 to-sky-600/20 flex items-center justify-center">
                    <Twitter className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">تويتر</div>
                    <div className="text-gray-500 text-xs">@hassantalha</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                وقت الرد: <span className="text-gold">خلال 24-48 ساعة</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
