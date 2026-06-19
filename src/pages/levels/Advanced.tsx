import { motion } from 'framer-motion';
import { Clock, Video, BookOpen, Check, ChevronLeft, Play, Award, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    id: 1,
    title: 'إتقان السحب العلوي',
    description: 'تعلم السحب الانفجاري والانتقال السلس للسحب العلوي',
    lessons: 15,
    duration: '6 أسابيع',
    skills: ['سحب انفجاري', 'تقنية الانتقال', 'بار مستقيم', 'سحب علوي بالحلقات'],
  },
  {
    id: 2,
    title: 'الميزان الأمامي',
    description: 'ابنِ قوة الذراع المستقيمة لهذا الثبات المبهِر',
    lessons: 12,
    duration: '8 أسابيع',
    skills: ['الميزان الأمامي المطوي', 'تطور الفرخة', 'الميزان الأمامي الكامل', 'لفات السحب'],
  },
  {
    id: 3,
    title: 'الميزان الخلفي',
    description: 'أتقن الميزان الخلفي بمسارات تقدم آمنة',
    lessons: 10,
    duration: '6 أسابيع',
    skills: ['تمرير الجلد', 'الميزان الخلفي المطوي', 'المعلق الألماني', 'الميزان الكامل'],
  },
  {
    id: 4,
    title: 'العلم البشري',
    description: 'حقق الثبات الأفقي المذهب ضد الجاذبية',
    lessons: 8,
    duration: '8 أسابيع',
    skills: ['قوة الكتف', 'ضغط المركز', 'ثباتات تقدمية', 'العلم الكامل'],
  },
];

export default function Advanced() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
              <Crown className="w-4 h-4 text-gold" />
              <span className="text-gold font-semibold text-sm">المستوى 3 - متقدم</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
                برنامج المتقدمين
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              أتقن أكثر مهارات الكاليستينيكس إبهارًا. السحب العلوي والميزان والعلم البشري المذهل.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="glass-gold rounded-xl p-4 text-center">
              <Video className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">45</div>
              <div className="text-gray-500 text-sm">درس فيديو</div>
            </div>
            <div className="glass-gold rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">28</div>
              <div className="text-gray-500 text-sm">أسبوع</div>
            </div>
            <div className="glass-gold rounded-xl p-4 text-center">
              <BookOpen className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-gray-500 text-sm">وحدات</div>
            </div>
            <div className="glass-gold rounded-xl p-4 text-center">
              <Award className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-gray-500 text-sm">شهادات مهارة</div>
            </div>
          </div>
        </div>
      </section>

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
                className="glass-gold rounded-2xl p-6 hover:shadow-lg hover:shadow-gold/10 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
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
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      ابدأ
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass-gold rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">مهارات ستتقنها</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'سحب علوي صارم', icon: '💪' },
                { name: 'ميزان أمامي كامل', icon: '🎯' },
                { name: 'ميزان خلفي كامل', icon: '⭐' },
                { name: 'علم بشري', icon: '🚩' },
              ].map((skill, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gold/5">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <div className="text-white font-semibold">{skill.name}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all"
            >
              ابدأ برنامج المتقدمين
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
