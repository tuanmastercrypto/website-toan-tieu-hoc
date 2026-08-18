import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { badges } from '../data/leaderboard';

export default function Achievements() {
  const { user } = useApp();
  const xpInCurrentLevel = user.xp % 100;
  const xpPercent = xpInCurrentLevel;

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill-badge text-amber-700 bg-amber-50/80 border-amber-200 mb-3">
            🏆 THÀNH TÍCH & PHẦN THƯỞNG
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mt-2">
            Học chăm chỉ, <span className="text-amber-500">nhận quà vui</span>
          </h2>
          <p className="text-slate-600 font-medium text-base mt-3">
            Tích lũy điểm kinh nghiệm (XP) sau mỗi câu trả lời đúng để thăng cấp và mở khóa huy hiệu vinh danh độc quyền!
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: User Stats Card (5 cols) */}
          <motion.div
            className="lg:col-span-5 card-kid p-7 bg-white flex flex-col justify-between"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-md text-white">
                  {user.avatar}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-800 leading-tight">
                    {user.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">
                      Cấp độ {user.level}
                    </span>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                      {user.xp} XP tích lũy
                    </span>
                  </div>
                </div>
              </div>

              {/* Level Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-600">Tiến trình lên Cấp {user.level + 1}</span>
                  <span className="text-blue-600 font-extrabold">{xpInCurrentLevel} / 100 XP</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${xpPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-[11px] font-semibold text-slate-400 mt-1.5 text-right">
                  Cần thêm {100 - xpInCurrentLevel} XP nữa
                </p>
              </div>
            </div>

            {/* 3 Quick Metric Boxes */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div className="bg-orange-50/80 border border-orange-100 rounded-2xl p-3 text-center">
                <div className="text-2xl mb-1">🔥</div>
                <div className="font-display font-black text-lg text-slate-800 leading-tight">{user.streak}</div>
                <div className="text-[11px] font-bold text-orange-700">Ngày streak</div>
              </div>

              <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-3 text-center">
                <div className="text-2xl mb-1">📅</div>
                <div className="font-display font-black text-lg text-slate-800 leading-tight">{user.totalDays}</div>
                <div className="text-[11px] font-bold text-blue-700">Ngày học</div>
              </div>

              <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-3 text-center">
                <div className="text-2xl mb-1">🎯</div>
                <div className="font-display font-black text-lg text-slate-800 leading-tight">{user.coursesCompleted}</div>
                <div className="text-[11px] font-bold text-emerald-700">Khóa xong</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Badges Showcase (7 cols) */}
          <motion.div
            className="lg:col-span-7 card-kid p-7 bg-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold text-xl text-slate-800">
                Bộ sưu tập Huy hiệu 🏅
              </h3>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {badges.filter(b => b.earned).length}/{badges.length} Đã mở khóa
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {badges.map((b, i) => (
                <motion.div
                  key={b.id}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between ${
                    b.earned
                      ? 'bg-amber-50/50 border-amber-200/80 shadow-xs'
                      : 'bg-slate-50/60 border-slate-200/60 opacity-50 grayscale'
                  }`}
                  whileHover={b.earned ? { scale: 1.04 } : {}}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${b.color} flex items-center justify-center text-2xl mb-2.5 shadow-sm text-white`}>
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800 leading-tight mb-1">
                      {b.name}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-snug">
                      {b.desc}
                    </p>
                  </div>

                  <span className={`text-[10px] font-black uppercase mt-2 px-2 py-0.5 rounded-full ${
                    b.earned ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {b.earned ? '✓ Đã đạt' : 'Chưa đạt'}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
