import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, Users, Award, TrendingUp, Globe, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: 5000, suffix: '+', label: 'طالب متحول', icon: Users },
  { value: 10, suffix: '+', label: 'سنوات خبرة', icon: Award },
  { value: 95, suffix: '%', label: 'معدل النجاح', icon: TrendingUp },
  { value: 50, suffix: '+', label: 'دولة', icon: Globe },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  );
}

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/4162458/pexels-photo-4162458.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://cdn.coverr.co/videos/coverr-man-doing-workout-on-rooftop-4175/1080p.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212,175,55,0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00FF7F]/8 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF7F] animate-pulse" />
              <span className="text-sm text-gold font-medium">تدريب كاليستينيكس عالمي المستوى</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
              <span className="text-white">أتقن جسدك.</span>
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
                افتح قوتك الحقيقية.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              تدريب كاليستينيكس مخصص لتحويل جسدك وقوتك ومرونتك وثقتك.
              <span className="text-gold font-semibold"> تدرب كرياضي. اظهر كبطل.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:flex-row-reverse">
              <Link
                to="/register"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/50 transition-all hover:scale-105"
              >
                ابدأ رحلتك
                <ChevronRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setShowVideo(true)}
                className="px-8 py-4 rounded-full glass text-white font-semibold text-lg inline-flex items-center justify-center gap-2 hover:border-gold/50 transition-all group hover:bg-white/10"
              >
                <Play className="w-5 h-5 text-gold group-hover:text-gold-light" />
                شاهد الفيديو
              </button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 to-[#00FF7F]/30 rounded-3xl blur-3xl" />

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden glass p-2 glow-gold">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.pexels.com/photos/4162458/pexels-photo-4162458.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="حسان طلحة - مدرب كاليستينيكس"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border-2 border-gold group-hover:bg-gold/40 transition-all group-hover:scale-110">
                      <Play className="w-8 h-8 text-gold ml-1" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Floating Badge - Years */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 top-1/4 glass-gold rounded-2xl p-4 shadow-xl glow-gold"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">10+</div>
                  <div className="text-xs text-gray-300">سنوات تدريب</div>
                </div>
              </motion.div>

              {/* Floating Badge - Students */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-xl border-electric-green/30 glow-green"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-green">5000+</div>
                  <div className="text-xs text-gray-300">قصة نجاح</div>
                </div>
              </motion.div>

              {/* Bottom Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-gold rounded-full px-6 py-2 flex items-center gap-2"
              >
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm text-white font-semibold">مدرب بطل عالمي</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-gold/50 transition-all hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center mx-auto mb-4 group-hover:from-[#D4AF37]/40 transition-all">
                <stat.icon className="w-7 h-7 text-gold" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative w-full max-w-5xl mx-4 aspect-video rounded-3xl overflow-hidden glass-gold"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-red-500/50 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full h-full bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Play className="w-12 h-12 text-gold ml-2" />
                </div>
                <p className="text-gray-400 text-lg">مشغل الفيديو</p>
                <p className="text-gray-500 text-sm mt-2">استبدل هذا بفيديو الفعلي</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
