import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Star, Quote, ArrowRightLeft } from 'lucide-react';

const transformations = [
  {
    id: 1,
    before: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'ماركوس جونسون',
    time: '6 أشهر',
    quote: 'حسان حول جسدي وعقلي بالكامل. من صراعي مع 5 ضغطات إلى سحب علوي!',
    rating: 5,
    transformation: 'فقد 14 كجم، اكتسب 7 كجم عضلات',
  },
  {
    id: 2,
    before: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'سارة ويليامز',
    time: '8 أشهر',
    quote: 'المنهج الشخصي جعل كل الفرق. كل جلسة كانت مصممة لأهدافي.',
    rating: 5,
    transformation: 'من أول سحبة إلى 20 تكرار',
  },
  {
    id: 3,
    before: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'ديفيد تشن',
    time: '12 شهرًا',
    quote: 'في 45، لم أكن أظن أنني أستطيع تحقيق العلم البشري. حسان أثبت لي خطأي!',
    rating: 5,
    transformation: 'حقق العلم البشري الكامل',
  },
];

const testimonials = [
  {
    name: 'مايكل توريس',
    location: 'لوس أنجلوس، أمريكا',
    content: 'أفضل استثمار قمت به لنفسي. منهج حسان في التدريب ثوري. النتائج تتحدث عن نفسها.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    achievement: 'اكتسب 11 كجم عضلات',
  },
  {
    name: 'إيما شميدت',
    location: 'برلين، ألمانيا',
    content: 'جربت العديد من برامج اللياقة، لكن لا شيء يقارن بتدريب حسان للكاليستينيكس. الاهتمام بالوضعية والتقدم لا مثيل له.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    achievement: 'أول سحب علوي في 32',
  },
  {
    name: 'جيمس أوكونكو',
    location: 'لندن، بريطانيا',
    content: 'من صفر سحبات إلى 20 في 4 أشهر فقط. برامج حسان التدريجية سحر خالص.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    achievement: 'إتقان الميزان الأمامي',
  },
];

export default function TransformationsSection() {
  const [currentTransformation, setCurrentTransformation] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const nextTransformation = () => {
    setCurrentTransformation((prev) => (prev + 1) % transformations.length);
    setShowAfter(false);
  };

  const prevTransformation = () => {
    setCurrentTransformation((prev) => (prev - 1 + transformations.length) % transformations.length);
    setShowAfter(false);
  };

  return (
    <section id="transformations" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Background Image */}
      <div className="absolute inset-0 opacity-3">
        <img
          src="https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
            <span className="text-gold font-semibold text-sm">نتائج حقيقية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">معرض </span>
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              التحولات
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            شاهد الرحلات المذهلة لطلابنا. أشخاص حقيقيون، نتائج حقيقية، تحولات حقيقية.
          </p>
        </motion.div>

        {/* Main Transformation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="glass-gold rounded-3xl p-2 glow-gold">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Before Image */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer"
                   onClick={() => setShowAfter(false)}>
                <img
                  src={transformations[currentTransformation].before}
                  alt="قبل التحول"
                  className={`w-full aspect-square object-cover transition-all duration-500 ${!showAfter ? '' : 'grayscale opacity-50'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full transition-all ${
                  !showAfter ? 'bg-gold text-black' : 'glass'
                }`}>
                  <span className="font-bold">قبل</span>
                </div>
                {!showAfter && (
                  <div className="absolute bottom-4 right-4 left-4 text-right">
                    <div className="text-white font-bold text-lg">{transformations[currentTransformation].name}</div>
                    <div className="text-gray-300 text-sm">{transformations[currentTransformation].time} رحلة</div>
                  </div>
                )}
              </div>

              {/* After Image */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer"
                   onClick={() => setShowAfter(true)}>
                <img
                  src={transformations[currentTransformation].after}
                  alt="بعد التحول"
                  className={`w-full aspect-square object-cover transition-all duration-500 ${showAfter ? '' : 'grayscale opacity-50'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full transition-all ${
                  showAfter ? 'bg-electric-green text-black' : 'glass'
                }`}>
                  <span className="font-bold">بعد</span>
                </div>
                {showAfter && (
                  <div className="absolute bottom-4 right-4 left-4 text-right">
                    <div className="text-electric-green font-bold text-lg">{transformations[currentTransformation].transformation}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Toggle Indicator */}
            <div className="flex items-center justify-center gap-4 py-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                !showAfter ? 'bg-gold/20 text-gold' : 'text-gray-500'
              }`}>
                <span className="font-semibold">قبل</span>
              </div>
              <ArrowRightLeft className="w-5 h-5 text-gray-500" />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                showAfter ? 'bg-electric-green/20 text-electric-green' : 'text-gray-500'
              }`}>
                <span className="font-semibold">بعد</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            key={currentTransformation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-4" />
            <p className="text-xl text-gray-300 italic max-w-2xl mx-auto mb-4">
              "{transformations[currentTransformation].quote}"
            </p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(transformations[currentTransformation].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTransformation}
              className="p-3 rounded-full glass hover:border-gold/50 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTransformation(index);
                    setShowAfter(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentTransformation
                      ? 'bg-gold w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTransformation}
              className="p-3 rounded-full glass hover:border-gold/50 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group hover:scale-105"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-gray-300 mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-electric-green/10 text-electric-green text-sm font-semibold">
                {testimonial.achievement}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <button className="flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors group">
                  <Play className="w-4 h-4" />
                  <span>شاهد القصة</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
