import { motion } from 'framer-motion';
import { Clock, Video, BookOpen, Check, ChevronLeft, Play, Award, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'تصميم برنامج شخصي',
    description: 'برامج تدريب مخصصة مصممة خصيصًا لأهدافك ونقاط ضعفك وجدولك.',
    icon: '🎯',
  },
  {
    title: 'مكالمات تدريب فردية أسبوعية',
    description: 'جلسات فيديو خاصة مع حسان لمراجعة التقنية وتعديلات التقدم.',
    icon: '📹',
  },
  {
    title: 'التحضير للبطولات',
    description: 'تحضير كامل لبطولات الكاليستينيكس مع تصميم الروتين وملاحظات التحكيم.',
    icon: '🏆',
  },
  {
    title: 'رسائل مباشرة للمدرب',
    description: 'وصول ذو أولوية لحسان عبر الرسائل الخاصة للأسئلة ومراجعات الوضعية.',
    icon: '💬',
  },
  {
    title: 'خطة تغذية مخصصة',
    description: 'تدريب تغذية شخصي مع تتبع المغذيات وخطط وجبات.',
    icon: '🥗',
  },
  {
    title: 'مراجعة أهداف ربع سنوية',
    description: 'مراجعات تقدم معمقة وتعديلات البرنامج كل ربع سنة.',
    icon: '📊',
  },
];

export default function Elite() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />

        {/* Special Background Effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-electric-green/10 blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-6 border-gold/30">
              <Crown className="w-5 h-5 text-gold" />
              <span className="text-gold font-bold text-sm">المستوى 4 - رياضي نخبة</span>
              <Star className="w-4 h-4 text-gold fill-gold" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
                تدريب رياضي النخبة
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              تدريب فردي للرياضيين الجادين الذين يستعدون للبطولات أو أهداف مستوى النخبة.
              وصول مباشر لحسان مع برمجة شخصية.
            </p>
          </motion.div>

          {/* Elite Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <div className="glass-gold rounded-3xl p-1 glow-gold">
              <div className="bg-black rounded-[22px] px-12 py-8 flex flex-col items-center">
                <Crown className="w-20 h-20 text-gold mb-4" />
                <h2 className="text-3xl font-bold text-white mb-2">عضوية النخبة</h2>
                <p className="text-gray-400 mb-6">تجربة التدريب الحصرية الأكثر</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-gold">$249</span>
                  <span className="text-gray-500">/شهر</span>
                </div>
                <Link
                  to="/register"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all"
                >
                  قدم الآن
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">ماذا يتضمن</h2>
            <p className="text-gray-400">كل ما تحتاجه للوصول لمستوى النخبة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-gold rounded-2xl p-6 hover:shadow-lg hover:shadow-gold/10 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* What You'll Achieve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">أهداف مستوى النخبة</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'مهارات جاهزة للبطولة',
                'حركات مركبة متقدمة',
                'أقصى إخراج للقوة',
                'أداء مستوى المحترفين',
                'عقلية البطل',
                'إرشاد مهني',
              ].map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gold/5">
                  <Check className="w-5 h-5 text-gold" />
                  <span className="text-white font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass-gold rounded-3xl p-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">توفر محدود</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              أماكن تدريب النخبة محدودة لضمان الجودة. قدم الآن لحجز استشارتك
              مع حسان.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all"
              >
                قدم للنخبة
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-gold font-bold text-lg hover:border-gold/50 transition-all"
              >
                احجز مكالمة مجانية
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
