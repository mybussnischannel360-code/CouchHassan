import { motion } from 'framer-motion';
import { Dumbbell, Apple, Target, BarChart3, Users, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'برامج شخصية',
    description: 'كل برنامج مصمم حسب مستواك وأهدافك وجدولك. بدون روتينات جاهزة.',
    color: 'gold',
  },
  {
    icon: Apple,
    title: 'إرشادات التغذية',
    description: 'خطط تغذية شاملة تكمل تدريبك للحصول على أفضل النتائج.',
    color: 'green',
  },
  {
    icon: Dumbbell,
    title: 'تصحيح التقنية',
    description: 'تحليل فيديو خبير وملاحظات لإتقان وضعيتك ومنع الإصابات.',
    color: 'gold',
  },
  {
    icon: BarChart3,
    title: 'تتبع التقدم',
    description: 'تحليلات مفصلة وتقارير تقدم للحفاظ على حماسك وعلى المسار الصحيح.',
    color: 'green',
  },
  {
    icon: Users,
    title: 'دعم المجتمع',
    description: 'انضم لمجتمع نابض من الرياضيين ذوي العقلية المشابهة للحماس والدعم.',
    color: 'gold',
  },
  {
    icon: MessageCircle,
    title: 'وصول مباشر للمدرب',
    description: 'احصل على إجابات لأسئلتك مباشرة من حسان عبر الرسائل الخاصة.',
    color: 'green',
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-electric-green/5 blur-3xl" />
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
            <span className="text-gold font-semibold text-sm">لماذا أختارني</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">لماذا تتدرب مع </span>
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              حسان طلحة
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            جرب منهج تدريب يجمع بين الخبرة العالمية والاهتمام الحقيقي بنجاحك.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass rounded-2xl p-8 group hover:shadow-lg transition-all ${
                feature.color === 'gold'
                  ? 'hover:shadow-gold/10 hover:border-gold/30'
                  : 'hover:shadow-electric-green/10 hover:border-electric-green/30'
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  feature.color === 'gold'
                    ? 'bg-gradient-to-br from-gold/20 to-gold/5'
                    : 'bg-gradient-to-br from-electric-green/20 to-electric-green/5'
                }`}
              >
                <feature.icon
                  className={`w-8 h-8 ${
                    feature.color === 'gold' ? 'text-gold' : 'text-electric-green'
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all"
          >
            ابدأ تحولك
          </a>
        </motion.div>
      </div>
    </section>
  );
}
