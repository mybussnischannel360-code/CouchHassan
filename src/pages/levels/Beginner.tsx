import { motion } from 'framer-motion';
import { Clock, Video, BookOpen, Check, ChevronLeft, Play, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    id: 1,
    title: 'أساسيات التأسيس',
    description: 'أتقن الحركات الأساسية التي تشكل جوهر الكاليستينيكس',
    lessons: 8,
    duration: 'أسبوعين',
    skills: ['إحماء صحيح', 'وضعية الضغط', 'تقنية القرفصاء', 'تقوية المركز'],
  },
  {
    id: 2,
    title: 'تطور السحب',
    description: 'ابنِ نحو أول سحبة لك مع التراجع والتمارين المساعدة',
    lessons: 10,
    duration: '3 أسابيع',
    skills: ['السحب الأسترالي', 'السحب السلبي', 'المساعدة بالأربطة', 'السحبة الكاملة'],
  },
  {
    id: 3,
    title: 'إتقان قوة المركز',
    description: 'طور مركزًا صخريًا للحركات المتقدمة',
    lessons: 6,
    duration: 'أسبوعين',
    skills: ['تنويعات البلانك', 'رفع الأرجل', 'مقدمة عجلة البطن', 'التجويف الجسم'],
  },
  {
    id: 4,
    title: 'المرونة والمطاطية',
    description: 'حسّن نطاق حركتك ومنع الإصابات',
    lessons: 5,
    duration: 'أسبوع',
    skills: ['مرونة الوركين', 'صحة الكتفين', 'تحضير المعصمين', 'المرونة النشطة'],
  },
];

export default function Beginner() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold font-semibold text-sm">المستوى 1</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
                برنامج المبتدئين
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              أساس مثالي للمبتدئين في الكاليستينيكس. ابنِ القوة والمرونة والثقة من يوم واحد.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="glass rounded-xl p-4 text-center">
              <Video className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">29</div>
              <div className="text-gray-500 text-sm">درس فيديو</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-gray-500 text-sm">أسابيع</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <BookOpen className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-gray-500 text-sm">وحدات</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <Award className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-gray-500 text-sm">شهادة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-gold/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                        <span className="text-gold font-bold">{module.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{module.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {module.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full glass text-xs text-gold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">{module.lessons}</div>
                      <div className="text-gray-500 text-sm">دروس</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">{module.duration}</div>
                      <div className="text-gray-500 text-sm">المدة</div>
                    </div>
                    <Link
                      to="/register"
                      className="px-6 py-3 rounded-xl bg-gold text-black font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      ابدأ
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">ما ستحققه</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'وضعية ضغط مثالية (30+ تكرار)',
                'تحقيق أول سحبة',
                'القرفصاء بعمق صحيح',
                'ثبات البلانك (2+ دقيقة)',
                'أساس قوة المركز',
                'معرفة الوقاية من الإصابات',
              ].map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <Check className="w-5 h-5 text-electric-green" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all"
            >
              ابدأ برنامج المبتدئين
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
