import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { courses } from '../data/courses';
import { badges } from '../data/leaderboard';
import { Award, Flame, Calendar, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Dashboard() {
  const { user } = useApp();
  const xpInLevel = user.xp % 100;
  const xpPercent = xpInLevel;

  const activeCourses = courses.filter((c) => (user.courseProgress[c.id] || 0) > 0);
  const earnedBadges = badges.filter((b) => user.badgesEarned.includes(b.id));

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Header */}
        <div className="card-kid p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white mb-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl shadow-inner flex-shrink-0">
              {user.avatar}
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-blue-100">
                GÓC HỌC TẬP CỦA EM
              </span>
              <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white mt-1.5">
                Xin chào, {user.name}! 🌟
              </h1>
              <p className="text-blue-100 text-sm sm:text-base font-medium mt-1">
                Hôm nay là một ngày tuyệt vời để cùng thầy và các bạn mở rộng cây tri thức toán học nhé.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Quick Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="card-kid p-5 bg-white border border-slate-200/80 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="font-display font-black text-2xl text-slate-800">{user.xp}</div>
            <div className="text-xs font-bold text-slate-500">Tổng điểm XP</div>
          </div>

          <div className="card-kid p-5 bg-white border border-slate-200/80 text-center">
            <div className="text-3xl mb-2">🏅</div>
            <div className="font-display font-black text-2xl text-blue-600">Cấp {user.level}</div>
            <div className="text-xs font-bold text-slate-500">Cấp độ hiện tại</div>
          </div>

          <div className="card-kid p-5 bg-white border border-slate-200/80 text-center">
            <div className="text-3xl mb-2">🔥</div>
            <div className="font-display font-black text-2xl text-orange-600">{user.streak} ngày</div>
            <div className="text-xs font-bold text-slate-500">Chuỗi ngày học</div>
          </div>

          <div className="card-kid p-5 bg-white border border-slate-200/80 text-center">
            <div className="text-3xl mb-2">📚</div>
            <div className="font-display font-black text-2xl text-emerald-600">{activeCourses.length} khóa</div>
            <div className="text-xs font-bold text-slate-500">Đang theo học</div>
          </div>
        </div>

        {/* 2 Main Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Progress & Active Courses (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Level Bar Card */}
            <div className="card-kid p-6 bg-white border border-slate-200/80">
              <div className="flex justify-between items-center text-sm font-bold mb-2">
                <span className="text-slate-700">Tiến trình thăng cấp (Cấp {user.level} → {user.level + 1})</span>
                <span className="text-blue-600 font-extrabold">{xpInLevel} / 100 XP</span>
              </div>

              <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-700"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>

              <p className="text-xs font-semibold text-slate-400 text-right">
                Cần thêm {100 - xpInLevel} XP nữa để lên cấp mới
              </p>
            </div>

            {/* Courses In-Progress */}
            <div className="card-kid p-6 bg-white border border-slate-200/80">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-xl text-slate-800">
                  Khóa học đang học dở
                </h2>
                <Link to="/courses" className="text-xs font-bold text-blue-600 hover:underline">
                  Xem tất cả
                </Link>
              </div>

              <div className="space-y-3.5">
                {activeCourses.map((c) => {
                  const progress = user.courseProgress[c.id] || 0;
                  return (
                    <Link
                      key={c.id}
                      to="/lesson/1"
                      className="p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-3xl">{c.icon}</span>
                        <div>
                          <h3 className="font-display font-bold text-base text-slate-800 group-hover:text-blue-600 transition-colors">
                            {c.title}
                          </h3>
                          <div className="text-xs font-semibold text-slate-500">
                            Tiến độ: {progress}% hoàn thành
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-20 hidden sm:block h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progress}%` }} />
                        </div>
                        <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Badges & Quick Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Badges Box */}
            <div className="card-kid p-6 bg-white border border-slate-200/80">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-xl text-slate-800">
                  Huy hiệu của em 🏅
                </h2>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {earnedBadges.length} Đã đạt
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {earnedBadges.map((b) => (
                  <div
                    key={b.id}
                    className="p-3 rounded-2xl bg-amber-50/50 border border-amber-200/80 text-center flex flex-col items-center justify-between"
                  >
                    <span className="text-3xl mb-1">{b.icon}</span>
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">
                      {b.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Practice CTA */}
            <div className="card-kid p-6 bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-display font-extrabold text-xl mb-1">
                Luyện tập trắc nghiệm nhanh
              </h3>
              <p className="text-xs sm:text-sm text-amber-50 font-medium leading-relaxed mb-4">
                Làm 5 câu hỏi nhanh mỗi ngày để giữ vững chuỗi Streak ngọn lửa và leo hạng Quán Quân!
              </p>
              <Link
                to="/quiz/1"
                className="w-full py-3 bg-white text-orange-700 font-display font-black text-sm text-center rounded-full block shadow-sm hover:bg-amber-50 transition-colors"
              >
                Làm bài trắc nghiệm ngay →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
