import { motion } from 'framer-motion';
import { Award, Clock, Users, Trophy, Target, Heart, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    label: 'الخبرة',
    value: '10+',
    sublabel: 'سنوات تدريب',
    icon: Clock,
    color: 'gold',
  },
  {
    label: 'الشهادات',
    value: '15+',
    sublabel: 'شهادة مهنية',
    icon: Award,
    color: 'green',
  },
  {
    label: 'ساعات التدريب',
    value: '20K+',
    sublabel: 'ساعة تدريب',
    icon: Users,
    color: 'gold',
  },
  {
    label: 'قصص النجاح',
    value: '5000+',
    sublabel: 'حياة تغيرت',
    icon: Trophy,
    color: 'green',
  },
];

const achievements = [
  'وصيف بطولة العالم للكاليستينيكس 2019',
  'بطل الستريت ووركوت الأوروبي 2020',
  'أخصائي القوة والتكييف المعتمد',
  'مدرب شخصي معتمد من ISSA',
  'مدرب كروس فيت المستوى 2',
  'أخصائي تغذية رياضية',
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/4162458/pexels-photo-4162458.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden glass p-2 glow-gold">
                <img
                  src="https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="حسان طلحة يتدرب"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 w-48 h-48 glass-gold rounded-3xl p-6 glow-gold"
              >
                <div className="h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-gold">10+</div>
                  <div className="text-sm text-gray-300">سنوات من التميز</div>
                </div>
              </motion.div>

              {/* Small coach image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden glass glow-green border-2 border-electric-green/30"
              >
                <img
                  src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="صورة حسان طلحة"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-4 -left-4 glass-gold rounded-2xl p-4"
              >
                <Trophy className="w-8 h-8 text-gold" />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -left-4 top-1/2 -translate-y-1/2 glass rounded-2xl p-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-green">250+</div>
                  <div className="text-xs text-gray-300">فيديو تم إنشاؤه</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="text-gold font-semibold text-sm">عن المدرب</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">تعرف على </span>
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
                حسان طلحة
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              حسان طلحة هو رياضي ومدرب كاليستينيكس عالمي المستوى مع أكثر من عقد من الخبرة
              في تحويل الأجسام والعقول. بدأت رحلته في الشوارع، متقنًا حركات وزن الجسم
              التي أكسبته اعترافًا عالميًا.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              تجمع فلسفته الفريدة في التدريب بين المبادئ العلمية وثقافة الستريت ووركوت،
              مما يخلق برامج تبني ليس فقط القوة، بل <span className="text-gold font-semibold">الثقة والانضباط وعقلية المحارب</span>.
              ساعد حسان الجميع من المبتدئين الكاملين إلى الرياضيين المحترفين على تحقيق أهداف لم يظنوا أنها ممكنة.
            </p>

            {/* Philosophy Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-4 flex items-start gap-4 group hover:border-gold/30 transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-all">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">تدريب دقيق</h4>
                  <p className="text-gray-400 text-sm">كل حركة متقنة بإشراف خبير</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-start gap-4 group hover:border-electric-green/30 transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-electric-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-green/20 transition-all">
                  <Heart className="w-6 h-6 text-electric-green" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">منهج شامل</h4>
                  <p className="text-gray-400 text-sm">العقل والجسد والتغذية في تناغم</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-white font-semibold mb-4">الإنجازات والشهادات</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/beginner"
              className="inline-flex items-center gap-2 mt-8 text-gold hover:text-gold-light transition-colors font-semibold group"
            >
              عرض برامج التدريب
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass-${card.color} rounded-2xl p-6 text-center transition-all cursor-pointer`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color === 'gold' ? 'from-gold/20 to-transparent' : 'from-electric-green/20 to-transparent'} flex items-center justify-center mx-auto mb-4`}>
                <card.icon className={`w-7 h-7 ${card.color === 'gold' ? 'text-gold' : 'text-electric-green'}`} />
              </div>
              <div className={`text-3xl font-bold ${card.color === 'gold' ? 'text-gold' : 'text-electric-green'} mb-1`}>
                {card.value}
              </div>
              <div className="text-white font-medium">{card.label}</div>
              <div className="text-gray-500 text-sm mt-1">{card.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
