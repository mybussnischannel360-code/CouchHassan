import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  User, Award, BookOpen, Clock, TrendingUp, Play, Check, ChevronRight,
  Trophy, Target, BarChart3, Calendar, Bell
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

interface Progress {
  totalLessons: number;
  completedLessons: number;
  currentLevel: string;
  streak: number;
}

export default function Dashboard() {
  const { user, profile, signOut } = useAuth();
  const [progress, setProgress] = useState<Progress>({
    totalLessons: 0,
    completedLessons: 0,
    currentLevel: 'Beginner',
    streak: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user) return;

      try {
        const { data: lessonsData } = await supabase
          .from('lesson_progress')
          .select('*, lessons!inner(id, title)')
          .eq('user_id', user.id);

        const completedCount = lessonsData?.filter(l => l.completed).length || 0;
        const totalCount = 29; // Total lessons in beginner

        setProgress({
          totalLessons: totalCount,
          completedLessons: completedCount,
          currentLevel: profile?.membership_tier || 'beginner',
          streak: 7, // Mock streak
        });
      } catch (err) {
        console.error('Error fetching progress:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user, profile]);

  if (!user) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Access Denied</h2>
          <p className="text-gray-400 mb-8">Please sign in to access your dashboard</p>
          <Link
            to="/login"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-black font-bold"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const completionPercentage = progress.totalLessons > 0
    ? Math.round((progress.completedLessons / progress.totalLessons) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, {profile?.full_name || 'Athlete'}
              </h1>
              <p className="text-gray-400">Track your progress and continue your training</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-3 rounded-xl glass hover:border-gold/30 transition-all relative">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full" />
              </button>
              <Link
                to="/beginner"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-semibold flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Continue Training
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="w-6 h-6 text-gold" />
              <span className="text-xs text-gray-500">PROGRESS</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {progress.completedLessons}/{progress.totalLessons}
            </div>
            <div className="text-sm text-gray-400">Lessons Completed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-6 h-6 text-electric-green" />
              <span className="text-xs text-gray-500">STRENGTH</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{completionPercentage}%</div>
            <div className="text-sm text-gray-400">Course Progress</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Award className="w-6 h-6 text-gold" />
              <span className="text-xs text-gray-500">LEVEL</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1 capitalize">{progress.currentLevel}</div>
            <div className="text-sm text-gray-400">Current Program</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-6 h-6 text-electric-green" />
              <span className="text-xs text-gray-500">STREAK</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{progress.streak}</div>
            <div className="text-sm text-gray-400">Day Streak</div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Your Progress</h2>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Beginner Program</span>
                  <span className="text-sm text-gold font-semibold">{completionPercentage}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${completionPercentage}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                  />
                </div>
              </div>

              {/* Modules */}
              <div className="space-y-4">
                {[
                  { name: 'Foundation Basics', completed: true, lessons: '4/4' },
                  { name: 'Pull-Up Progression', completed: false, lessons: '2/5' },
                  { name: 'Core Strength Mastery', completed: false, lessons: '0/6' },
                  { name: 'Mobility & Flexibility', completed: false, lessons: '0/5' },
                ].map((module, index) => (
                  <div
                    key={module.name}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      module.completed ? 'bg-electric-green/10' : 'bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        module.completed ? 'bg-electric-green' : 'bg-white/10'
                      }`}>
                        {module.completed ? (
                          <Check className="w-4 h-4 text-black" />
                        ) : (
                          <span className="text-gray-500 text-sm font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <div className={`font-semibold ${module.completed ? 'text-white' : 'text-gray-300'}`}>
                          {module.name}
                        </div>
                        <div className="text-sm text-gray-500">{module.lessons} lessons</div>
                      </div>
                    </div>
                    <Link
                      to="/beginner"
                      className="p-2 rounded-lg hover:bg-white/10 transition-all"
                    >
                      <Play className={`w-5 h-5 ${module.completed ? 'text-electric-green' : 'text-gray-400'}`} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Achievements</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '🏋️', name: 'First Workout', earned: true },
                  { icon: '💪', name: 'Pull-up King', earned: true },
                  { icon: '🎯', name: 'Perfect Form', earned: false },
                  { icon: '⭐', name: '7-Day Streak', earned: true },
                  { icon: '🏆', name: 'Competition Ready', earned: false },
                  { icon: '👑', name: 'Elite Status', earned: false },
                ].map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`text-center p-3 rounded-xl ${
                      achievement.earned ? 'bg-gold/10' : 'bg-white/5 opacity-50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs text-gray-400">{achievement.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/beginner"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Play className="w-5 h-5 text-gold" />
                    <span className="text-gray-300">Continue Training</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-electric-green" />
                    <span className="text-gray-300">Set New Goals</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-gold" />
                    <span className="text-gray-300">View Certificates</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
