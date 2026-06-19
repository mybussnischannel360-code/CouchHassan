import { motion } from 'framer-motion';
import { Award, ChevronLeft, Check, Video, BarChart3, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const levels = [
  {
    name: 'مبتدئ',
    slug: 'beginner',
    description: 'أساس مثالي للمبتدئين في الكاليستينيكس. ابنِ القوة والمرونة والثقة من يوم واحد.',
    features: [
      'تدريب الأساسيات',
      'بناء القوة الأساسية',
      'تمارين المرونة',
      'تصحيح الوضعية',
      'دروس فيديو',
      'تتبع التقدم',
    ],
    image: 'https://images.pexels.com/photos/4162458/pexels-photo-4162458.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'gold',
    popular: false,
  },
  {
    name: 'متوسط',
    slug: 'intermediate',
    description: 'ارتق بمهاراتك للمستوى التالي. أتقن السحب والغمس وأساسيات الوقوف على اليدين.',
    features: [
      'إتقان السحب',
      'تطور الغمس',
      'أساسيات الوقوف على اليدين',
      'بناء العضلات',
      'دروس فيديو',
      'تتبع التقدم',
    ],
    image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'green',
    popular: true,
  },
  {
    name: 'متقدم',
    slug: 'advanced',
    description: 'أتقن مهارات كاليستينيكس مبهرة. تعلم السحب العلوي والميزان والعلم البشري.',
    features: [
      'تدريب السحب العلوي',
      'الميزان الأمامي',
      'الميزان الخلفي',
      'العلم البشري',
      'دروس فيديو',
      'تتبع التقدم',
    ],
    image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'gold',
    popular: false,
  },
  {
    name: 'رياضي محترف',
    slug: 'elite',
    description: 'تدريب فردي للرياضيين الجادين الذين يستعدون للبطولات أو أهداف النخبة.',
    features: [
      'تدريب شخصي 1-على-1',
      'التحضير للبطولات',
      'مراجعة فيديو أسبوعية',
      'دعم مباشر من المدرب',
      'برمجة متقدمة',
      'وصول ذو أولوية',
    ],
    image: 'https://images.pexels.com/photos/4162527/pexels-photo-4162527.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'green',
    popular: false,
  },
];

export default function TrainingLevelsSection() {
  return (
    <section id="levels" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/4162458/pexels-photo-4162458.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <span className="text-gold font-semibold text-sm">برامج التدريب</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">اختر </span>
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              مستوى تدريبك
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            من مبتدئ تمامًا إلى رياضي محترف، اعثر على البرنامج المثالي لرحلتك.
          </p>
        </motion.div>

        {/* Level Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => (
            <motion.div
              key={level.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`relative rounded-3xl overflow-hidden h-[520px] ${level.popular ? 'ring-2 ring-gold' : ''}`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={level.image}
                    alt={level.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
                </div>

                {/* Popular Badge */}
                {level.popular && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-black text-sm font-bold z-10">
                    الأكثر شعبية
                  </div>
                )}

                {/* Level Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs text-gold font-semibold z-10">
                  المستوى {index + 1}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{level.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {level.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className={`w-4 h-4 ${level.color === 'gold' ? 'text-gold' : 'text-electric-green'} flex-shrink-0`} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learning Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Video className="w-4 h-4" />
                      <span>فيديو</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <BarChart3 className="w-4 h-4" />
                      <span>متابع</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/${level.slug}`}
                    className={`w-full py-3 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-all ${
                      level.popular
                        ? 'bg-gradient-to-r from-gold to-gold-light text-black hover:shadow-lg hover:shadow-gold/30'
                        : level.color === 'gold'
                        ? 'glass-gold text-gold hover:bg-gold/20'
                        : 'glass text-electric-green border-electric-green/30 hover:bg-electric-green/20'
                    }`}
                  >
                    عرض البرنامج
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-gold rounded-2xl p-8 inline-flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <div className="text-right">
              <h3 className="text-white font-semibold mb-1">غير متأكد أي مستوى مناسب لك؟</h3>
              <p className="text-gray-400 text-sm">
                احجز استشارة مجانية مع حسان لمناقشة أهدافك والعثور على البرنامج المثالي.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-electric-green text-black font-semibold hover:shadow-lg hover:shadow-electric-green/30 transition-all whitespace-nowrap flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              احجز مكالمة مجانية
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
