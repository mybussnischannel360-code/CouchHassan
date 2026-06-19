import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, Crown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'أساسي',
    description: 'مثالي للبدء في الكاليستينيكس',
    icon: Zap,
    monthlyPrice: 49,
    yearlyPrice: 399,
    features: [
      'الوصول لبرنامج المبتدئين',
      'مكتبة الفيديو الأساسية',
      'الوصول لمنتدى المجتمع',
      'متتبع التقدم',
      'دعم عبر البريد الإلكتروني',
      'جلسة أسئلة وأجوبة شهرية',
    ],
    color: 'gray',
    popular: false,
  },
  {
    name: 'احترافي',
    description: 'تجربة كاليستينيكس الكاملة',
    icon: Star,
    monthlyPrice: 99,
    yearlyPrice: 799,
    features: [
      'الوصول لجميع البرامج',
      'مكتبة فيديو كاملة',
      'مجموعة مجتمع خاصة',
      'إرشادات التغذية',
      'دعم ذو أولوية',
      'تدريب جماعي أسبوعي',
      'مراجعة فيديو التقنية',
      'بدائل التمارين',
    ],
    color: 'gold',
    popular: true,
  },
  {
    name: 'نخبة',
    description: 'تدريب شخصي للرياضيين الجادين',
    icon: Crown,
    monthlyPrice: 249,
    yearlyPrice: 1999,
    features: [
      'كل شيء في الاحترافي',
      'مكالمات تدريب فردية أسبوعية',
      'تصميم برنامج شخصي',
      'رسائل مباشرة للمدرب',
      'التحضير للبطولات',
      'خطة تغذية مخصصة',
      'طلبات ميزات ذات أولوية',
      'مراجعة أهداف ربع سنوية',
      'وصول VIP للمجتمع',
    ],
    color: 'green',
    popular: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-gold font-semibold text-sm">خطط الاشتراك</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">استثمر في </span>
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              تحولك
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            اختر العضوية التي تناسب أهدافك. جميع الخطط تتضمن تجربة مجانية لمدة 7 أيام.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-gray-500'}`}>
            شهري
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-20 h-10 rounded-full transition-all ${
              isYearly ? 'bg-gold' : 'bg-gray-700'
            }`}
          >
            <div
              className={`absolute top-1 w-8 h-8 rounded-full bg-white transition-all duration-300 ${
                isYearly ? 'right-1' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-gray-500'}`}>
            سنوي
          </span>
          {isYearly && (
            <span className="px-3 py-1 rounded-full bg-electric-green/20 text-electric-green text-xs font-bold">
              وفر 30%
            </span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl ${plan.popular ? 'scale-105 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full bg-gradient-to-r from-gold to-gold-light text-black text-sm font-bold z-10">
                  <Sparkles className="w-4 h-4 inline ml-1" />
                  الأكثر شعبية
                </div>
              )}
              <div
                className={`h-full rounded-3xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-gold/10 to-transparent border-2 border-gold/30'
                    : 'glass'
                }`}
              >
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.color === 'gold'
                        ? 'bg-gold/20'
                        : plan.color === 'green'
                        ? 'bg-electric-green/20'
                        : 'bg-gray-700'
                    }`}
                  >
                    <plan.icon
                      className={`w-6 h-6 ${
                        plan.color === 'gold'
                          ? 'text-gold'
                          : plan.color === 'green'
                          ? 'text-electric-green'
                          : 'text-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-500 text-sm">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500">
                      /{isYearly ? 'سنة' : 'شهر'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-gold mt-1">
                      وفر ${(plan.monthlyPrice * 12) - plan.yearlyPrice} في السنة
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 ${
                          plan.color === 'gold'
                            ? 'text-gold'
                            : plan.color === 'green'
                            ? 'text-electric-green'
                            : 'text-gray-400'
                        }`}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/register"
                  className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-gold to-gold-light text-black hover:shadow-lg hover:shadow-gold/30'
                      : plan.color === 'green'
                      ? 'border-2 border-electric-green text-electric-green hover:bg-electric-green hover:text-black'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  ابدأ تجربة مجانية
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <div className="text-right">
                <h3 className="text-white font-bold text-lg mb-1">تجربة مجانية 7 أيام</h3>
                <p className="text-gray-400 text-sm max-w-md">
                  جرب أي خطة بدون مخاطرة لمدة 7 أيام. إذا لم تكن راضيًا، احصل على استرداد كامل. بدون أسئلة.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
