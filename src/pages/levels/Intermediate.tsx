import { motion } from 'framer-motion';
import { Clock, Video, BookOpen, Check, ChevronLeft, Play, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    id: 1,
    title: 'إتقان السحب',
    description: 'ابنِ أرقام سحبات مبهرة وأتقن تقنيتك',
    lessons: 12,
    duration: '4 أسابيع',
    skills: ['قبضة واسعة', 'قبضة ضيقة', 'سحب كوماندو', '15+ تكرار'],
  },
  {
    id: 2,
    title: 'تطور الغمس',
    description: 'أتقن الغمس وابنِ قوة دفع مذهلة',
    lessons: 10,
    duration: '3 أسابيع',
    skills: ['غمس الحلقات', 'غمس موزون', 'نطاق كامل', 'غمس L-sit'],
  },
  {
    id: 3,
    title: 'أساسيات الوقوف على اليدين',
    description: 'ابدأ رحلتك نحو الوقوف المثالي على اليدين',
    lessons: 8,
    duration: '4 أسابيع',
    skills: ['مشيط الحائط', 'ركلات الصعود', 'ثبات الحائط', 'تمارين التوازن'],
  },
  {
    id: 4,
    title: 'بناء العضلات',
    description: 'حسّن تدريبك للحصول على أقصى نمو عضلي',
    lessons: 6,
    duration: 'أسبوعين',
    skills: ['الوقت تحت التوتر', 'التدريب الحجمي', 'راحة-إيقاف', 'التقدم'],
  },
];

export default function Intermediate() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,127,0.1) 1px, transparent 1px)`,
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
              <span className="w-2 h-2 rounded-full bg-electric-green animate-pulse" />
              <span className="text-electric-green font-semibold text-sm">المستوى 2</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00FF7F] to-[#00C853] bg-clip-text text-transparent">
                برنامج المتوسطين
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              ارتق بمهاراتك للمستوى التالي. أتقن السحب والغمس وأساسيات الوقوف على اليدين.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="glass rounded-xl p-4 text-center border-electric-green/20">
              <Video className="w-6 h-6 text-electric-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">36</div>
              <div className="text-gray-500 text-sm">درس فيديو</div>
            </div>
            <div className="glass rounded-xl p-4 text-center border-electric-green/20">
              <Clock className="w-6 h-6 text-electric-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">13</div>
              <div className="text-gray-500 text-sm">أسبوع</div>
            </div>
            <div className="glass rounded-xl p-4 text-center border-electric-green/20">
              <BookOpen className="w-6 h-6 text-electric-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-gray-500 text-sm">وحدات</div>
            </div>
            <div className="glass rounded-xl p-4 text-center border-electric-green/20">
              <Award className="w-6 h-6 text-electric-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-gray-500 text-sm">شهادة</div>
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
                className="glass rounded-2xl p-6 hover:border-electric-green/30 transition-all border-electric-green/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-electric-green/10 flex items-center justify-center">
                        <span className="text-electric-green font-bold">{module.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{module.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {module.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full glass text-xs text-electric-green">
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
                      className="px-6 py-3 rounded-xl bg-electric-green text-black font-semibold hover:shadow-lg hover:shadow-electric-green/30 transition-all flex items-center gap-2"
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
            className="mt-16 glass rounded-3xl p-8 border-electric-green/20"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">ما ستحققه</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                '15+ سحبة صارمة',
                '20+ غمس بوضعية جيدة',
                'ثبات 30 ثانية على اليدين',
                'ثقة في غمس الحلقات',
                'تحضير للسحب العلوي',
                'تحكم متقدم في المركز',
              ].map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-electric-green/5">
                  <Check className="w-5 h-5 text-electric-green" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-electric-green to-[#00C853] text-black font-bold text-lg hover:shadow-lg hover:shadow-electric-green/30 transition-all"
            >
              ابدأ برنامج المتوسطين
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
