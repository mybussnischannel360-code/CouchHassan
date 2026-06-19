import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Play, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'ماركوس جونسون',
    location: 'نيويورك، أمريكا',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    content: 'حسان حول جسدي وعقلي بالكامل. من صراعي مع 5 ضغطات إلى سحب علوي في 4 أشهر فقط. اهتمامه بالوضعية والبرمجة التدريجية لا مثيل له.',
    rating: 5,
    achievement: 'زيادة 18 كجم عضلات',
  },
  {
    id: 2,
    name: 'إيما شميت',
    location: 'برلين، ألمانيا',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    content: 'كمرأة، كنت خائفة من الكاليستينيكس. حسان جعلني أشعر بالراحة من اليوم الأول. الآن أستطيع عمل 15 سحبة وأعمل على الميزان الأمامي.',
    rating: 5,
    achievement: 'من أول سحبة إلى 15',
  },
  {
    id: 3,
    name: 'جيمس أوكونكو',
    location: 'لندن، بريطانيا',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    content: 'المنهج الشخصي هو ما يميز حسان. كل جلسة مصممة لأهدافي. حققت سحب علوي وميزان أمامي وأقرب من علمي البشري الأول!',
    rating: 5,
    achievement: 'مهارات النخبة متقنة',
  },
  {
    id: 4,
    name: 'لوكاس مارتنيز',
    location: 'مدريد، إسبانيا',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
    content: 'جربت العديد من المدربين عبر الإنترنت، لكن حسان مختلف. يهتم حقًا بتقدمك ومتاح دائمًا للإجابة على الأسئلة. يستحق كل مبلغ.',
    rating: 5,
    achievement: 'جاهز للبطولة',
  },
  {
    id: 5,
    name: 'سارة تشين',
    location: 'تورنتو، كندا',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    content: 'في 45، ظننت أن أفضل أياملي ورائي. حسان أثبت لي خطأي. أقوى الآن مما كنت عليه في 25. برامجه مصممة علميًا لجميع الأعمار.',
    rating: 5,
    achievement: 'بطل في 45 عامًا',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-gold font-semibold text-sm">التقييمات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">ماذا يقول </span>
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              الطلاب
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            قصص حقيقية من أشخاص حقيقيين غيروا حياتهم مع تدريب حسان.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-gold rounded-3xl p-8 md:p-12 text-center glow-gold"
            >
              <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />

              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-gold" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                />
                <div className="text-right">
                  <h4 className="text-lg font-bold text-white">{testimonials[current].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[current].location}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-green/20 text-electric-green text-sm font-semibold mt-1">
                    {testimonials[current].achievement}
                  </div>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
                <Play className="w-5 h-5" />
                <span className="font-semibold">شاهد قصة الفيديو</span>
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full glass hover:border-gold/50 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current ? 'bg-gold w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full glass hover:border-gold/50 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setCurrent(index);
                setIsAutoPlaying(false);
              }}
              className={`relative rounded-xl overflow-hidden aspect-square ${
                current === index ? 'ring-2 ring-gold' : ''
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-2 right-2 left-2 text-right">
                <div className="text-white text-xs font-semibold truncate">{testimonial.name}</div>
                <div className="flex items-center justify-end gap-1 mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
