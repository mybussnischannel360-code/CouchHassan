import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users, BookOpen, Video, DollarSign, TrendingUp, Bell,
  BarChart3, Settings, Award, Plus, Edit, Trash2, Search
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: any;
  color: string;
}

const stats: Stat[] = [
  { label: 'Total Students', value: '2,547', change: '+12%', icon: Users, color: 'gold' },
  { label: 'Active Courses', value: '4', change: '0%', icon: BookOpen, color: 'green' },
  { label: 'Videos Uploaded', value: '156', change: '+8', icon: Video, color: 'gold' },
  { label: 'Monthly Revenue', value: '$45,280', change: '+23%', icon: DollarSign, color: 'green' },
];

export default function AdminDashboard() {
  const { profile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [students] = useState([
    { id: 1, name: 'Marcus Johnson', email: 'marcus@email.com', plan: 'Elite', progress: 85 },
    { id: 2, name: 'Sarah Williams', email: 'sarah@email.com', plan: 'Pro', progress: 62 },
    { id: 3, name: 'David Chen', email: 'david@email.com', plan: 'Basic', progress: 40 },
    { id: 4, name: 'Emma Schmidt', email: 'emma@email.com', plan: 'Pro', progress: 78 },
    { id: 5, name: 'James Okonkwo', email: 'james@email.com', plan: 'Elite', progress: 92 },
  ]);

  if (profile?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Access Denied</h2>
          <p className="text-gray-400">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage your coaching platform</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-xl glass hover:border-gold/30 transition-all relative">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full" />
            </button>
            <button className="px-4 py-2 rounded-xl glass hover:border-gold/30 transition-all flex items-center gap-2">
              <Settings className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Settings</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['overview', 'students', 'courses', 'videos', 'payments'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-gold to-gold-light text-black'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-2xl p-6 ${stat.color === 'gold' ? 'glass-gold' : 'border-electric-green/20'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color === 'gold' ? 'text-gold' : 'text-electric-green'}`} />
                <span className={`text-xs font-semibold ${stat.change.startsWith('+') ? 'text-electric-green' : 'text-gray-500'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Panel */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    { text: 'New student registered: Marcus Johnson', time: '2 min ago', type: 'new' },
                    { text: 'Payment received: $249 (Elite Plan)', time: '15 min ago', type: 'payment' },
                    { text: 'Video uploaded: Muscle-up Tutorial', time: '1 hour ago', type: 'upload' },
                    { text: 'Course completed: Beginner Program by Sarah', time: '3 hours ago', type: 'complete' },
                    { text: 'New testimonial submitted: David Chen', time: '5 hours ago', type: 'testimonial' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'payment' ? 'bg-electric-green' :
                        activity.type === 'new' ? 'bg-gold' :
                        activity.type === 'complete' ? 'bg-blue-500' : 'bg-gray-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'students' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Students</h2>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search students..."
                        className="pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-gray-400 border-b border-white/10">
                        <th className="pb-4">Student</th>
                        <th className="pb-4">Plan</th>
                        <th className="pb-4">Progress</th>
                        <th className="pb-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b border-white/5">
                          <td className="py-4">
                            <div>
                              <div className="text-white font-medium">{student.name}</div>
                              <div className="text-xs text-gray-500">{student.email}</div>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              student.plan === 'Elite' ? 'bg-gold/20 text-gold' :
                              student.plan === 'Pro' ? 'bg-electric-green/20 text-electric-green' :
                              'bg-gray-700 text-gray-300'
                            }`}>
                              {student.plan}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gold rounded-full"
                                  style={{ width: `${student.progress}%` }}
                                />
                              </div>
                              <span className="text-sm text-gray-400">{student.progress}%</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                                <Edit className="w-4 h-4 text-gray-400" />
                              </button>
                              <button className="p-2 rounded-lg hover:bg-red-500/20 transition-all">
                                <Trash2 className="w-4 h-4 text-gray-400" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'courses' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Courses</h2>
                  <button className="px-4 py-2 rounded-xl bg-gold text-black font-semibold flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Course
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Beginner', students: 1250, lessons: 29, status: 'Active' },
                    { name: 'Intermediate', students: 890, lessons: 36, status: 'Active' },
                    { name: 'Advanced', students: 350, lessons: 45, status: 'Active' },
                    { name: 'Elite', students: 57, lessons: 0, status: 'Private' },
                  ].map((course) => (
                    <div key={course.name} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div>
                        <div className="text-white font-semibold">{course.name} Program</div>
                        <div className="text-sm text-gray-500">{course.lessons} lessons • {course.students} students</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          course.status === 'Active' ? 'bg-electric-green/20 text-electric-green' : 'bg-gray-700 text-gray-300'
                        }`}>
                          {course.status}
                        </span>
                        <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                          <Edit className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Videos</h2>
                  <button className="px-4 py-2 rounded-xl bg-gold text-black font-semibold flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Upload Video
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Push-up Mastery', course: 'Beginner', duration: '12:30' },
                    { title: 'Pull-up Progression', course: 'Beginner', duration: '18:45' },
                    { title: 'Muscle-up Tutorial', course: 'Advanced', duration: '24:15' },
                    { title: 'Front Lever Step 1', course: 'Advanced', duration: '15:20' },
                  ].map((video, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white/5">
                      <div className="aspect-video bg-white/10 rounded-lg mb-3 flex items-center justify-center">
                        <Video className="w-8 h-8 text-gray-500" />
                      </div>
                      <div className="text-white font-medium">{video.title}</div>
                      <div className="text-sm text-gray-500">{video.course} • {video.duration}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'payments' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6">Recent Payments</h2>
                <div className="space-y-4">
                  {[
                    { user: 'Marcus Johnson', amount: '$249', plan: 'Elite', date: '2026-06-19' },
                    { user: 'Sarah Williams', amount: '$99', plan: 'Pro', date: '2026-06-18' },
                    { user: 'David Chen', amount: '$49', plan: 'Basic', date: '2026-06-17' },
                    { user: 'Emma Schmidt', amount: '$99', plan: 'Pro', date: '2026-06-16' },
                    { user: 'James Okonkwo', amount: '$249', plan: 'Elite', date: '2026-06-15' },
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div>
                        <div className="text-white font-medium">{payment.user}</div>
                        <div className="text-sm text-gray-500">{payment.plan} Plan</div>
                      </div>
                      <div className="text-right">
                        <div className="text-electric-green font-semibold">{payment.amount}</div>
                        <div className="text-xs text-gray-500">{payment.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">New Today</span>
                  <span className="text-gold font-semibold">+24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Active Now</span>
                  <span className="text-electric-green font-semibold">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Completion Rate</span>
                  <span className="text-white font-semibold">87%</span>
                </div>
              </div>
            </div>

            {/* Upcoming */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Upcoming</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/5">
                  <div className="text-sm text-white">Group Coaching Call</div>
                  <div className="text-xs text-gray-500">Tomorrow, 3:00 PM</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <div className="text-sm text-white">New Course Launch</div>
                  <div className="text-xs text-gray-500">Friday, June 25</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <div className="text-sm text-white">Newsletter Send</div>
                  <div className="text-xs text-gray-500">Sunday, June 22</div>
                </div>
              </div>
            </div>

            {/* Top Performing */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Top Students</h3>
              <div className="space-y-3">
                {['James Okonkwo', 'Emma Schmidt', 'Marcus Johnson'].map((student, index) => (
                  <div key={student} className="flex items-center gap-3 p-2">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{student}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
