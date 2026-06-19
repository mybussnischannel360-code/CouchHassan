import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'كيف يعمل التدريب عبر الإنترنت؟',
    answer: 'بعد التسجيل، ستحصل على الوصول إلى لوحة التدريب الشخصية. كل برنامج يتضمن دروس فيديو وجداول تدريب وتتبع تقدم ووصول مباشر لحسان للأسئلة. يمكنك التدريب بالسرعة التي تناسبك وإرسال فيديوهات لمراجعة الوضعية.',
  },
  {
    question: 'كم من الوقت حتى أرى النتائج؟',
    answer: 'معظم الطلاب يلاحظون تحسنات في القوة والوضعية خلال 2-4 أسابيع. التغييرات الجسدية المرئية تظهر عادة خلال 8-12 أسبوع من التدريب المستمر. التحولات الكبيرة مثل السحب العلوي أو الميزان الأمامي قد تستغرق 3-6 أشهر حسب نقطة البداية.',
  },
  {
    question: 'هل إرشادات التغذية مشمولة؟',
    answer: 'عضويات الاحترافي والنخبة تتضمن إرشادات تغذية شاملة. هذا يشمل أهداف المغذيات الكبرى وقوالب تخطيط الوجبات وتوصيات المكملات. أعضاء النخبة يحصلون على خطة تغذية مخصصة بالكامل مع تعديلات أسبوعية.',
  },
  {
    question: 'ما المعدات التي أحتاجها؟',
    answer: 'معظم التمارين يمكن أداؤها باستخدام قضيب سحب وباريلات متوازية فقط. بعض البرامج تستخدم أربطة مقاومة للتقدم. البرامج المتقدمة قد تستفيد من حلقات أو باريلات أو محطة كاليستينيكس كاملة. جميع البرامج تظهر بدائل المعدات.',
  },
  {
    question: 'هل يمكن للمبتدئين الكاملين الانضمام؟',
    answer: 'بالتأكيد! برنامج المبتدئين مصمم خصيصًا لأولئك بدون خبرة في الكاليستينيكس. ستتعلم الوضعية الصحيحة للحركات الأساسية مثل الضغط والقرفصاء والبلانك قبل الانتقال لتمارين أكثر تقدمًا.',
  },
  {
    question: 'ماذا لو كان لدي إصابة أو محدودية؟',
    answer: 'جميع البرامج تتضمن خيارات تراجع وتمارين بديلة. عند التسجيل، يمكنك إرسال تاريخ إصاباتك، وسيعطيك حسان تعديلات شخصية. العديد من الطلاب تدربوا بنجاح حول إصابات مع التوجيه المناسب.',
  },
  {
    question: 'هل يمكنني الإلغاء في أي وقت؟',
    answer: 'نعم، يمكنك إلغاء عضويتك في أي وقت بدون رسوم إلغاء. سيستمر وصولك حتى نهاية فترة الفوترة الحالية. نقدم أيضًا تجربة مجانية 7 أيام على جميع الخطط.',
  },
  {
    question: 'هل أحصل على الوصول لجميع البرامج؟',
    answer: 'أعضاء الاحترافي والنخبة يحصلون على الوصول لجميع برامج التدريب (مبتدئ، متوسط، متقدم، ونخبة). الأعضاء الأساسيون لديهم وصول لبرنامج المبتدئين مع خيار الترقیة لاحقًا.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-gold font-semibold text-sm">أسئلة شائعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">أسئلة متكررة </span>
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              السؤال
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            كل ما تحتاج معرفته عن برامج التدريب.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-right"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-white font-semibold">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pr-20">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <h3 className="text-white font-semibold mb-2">لا تزال لديك أسئلة؟</h3>
            <p className="text-gray-400 text-sm mb-4">
              لم تجد ما تبحث عنه؟ احجز مكالمة مجانية.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all"
            >
              تواصل مع حسان
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
