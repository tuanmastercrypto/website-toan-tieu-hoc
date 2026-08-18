import { motion } from 'framer-motion';
import { leaderboard } from '../data/leaderboard';

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-20 relative z-10 bg-slate-50/60 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill-badge text-yellow-800 bg-yellow-50/80 border-yellow-200 mb-3">
            👑 BẢNG VINH DANH TUẦN NÀY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mt-2">
            Top bạn nhỏ <span className="text-yellow-600">chăm ngoan & xuất sắc</span>
          </h2>
          <p className="text-slate-600 font-medium text-base mt-3">
            Cùng thi đua giải toán mỗi ngày để bước lên bục vinh quang và nhận cúp vàng danh dự nhé!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          
          {/* Top 3 Podium Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 items-end mb-8 pt-6">
            
            {/* Rank 2 (Silver) */}
            <motion.div
              className="card-kid p-4 sm:p-5 text-center bg-white flex flex-col items-center border border-slate-200/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-2xl sm:text-3xl mb-1">🥈</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 flex items-center justify-center text-2xl sm:text-3xl shadow-inner mb-2">
                {leaderboard[1].avatar}
              </div>
              <div className="font-display font-bold text-slate-800 text-sm sm:text-base truncate max-w-full">
                {leaderboard[1].name}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-blue-600">
                {leaderboard[1].xp} XP
              </div>
              <div className="mt-2 w-full py-1 rounded-xl bg-slate-200 text-slate-700 font-black text-xs">
                Hạng 2
              </div>
            </motion.div>

            {/* Rank 1 (Gold - Taller) */}
            <motion.div
              className="card-kid p-5 sm:p-6 text-center bg-gradient-to-b from-amber-50 to-white flex flex-col items-center border-2 border-amber-300 shadow-md scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl sm:text-4xl mb-1 animate-bounce">🥇</span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-100 flex items-center justify-center text-3xl sm:text-4xl shadow-inner mb-2 ring-4 ring-amber-300/40">
                {leaderboard[0].avatar}
              </div>
              <div className="font-display font-black text-slate-900 text-base sm:text-lg truncate max-w-full">
                {leaderboard[0].name}
              </div>
              <div className="text-sm sm:text-base font-black text-amber-600">
                {leaderboard[0].xp} XP
              </div>
              <div className="mt-2 w-full py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-black text-xs sm:text-sm shadow-xs">
                Quán Quân 👑
              </div>
            </motion.div>

            {/* Rank 3 (Bronze) */}
            <motion.div
              className="card-kid p-4 sm:p-5 text-center bg-white flex flex-col items-center border border-slate-200/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl sm:text-3xl mb-1">🥉</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl sm:text-3xl shadow-inner mb-2">
                {leaderboard[2].avatar}
              </div>
              <div className="font-display font-bold text-slate-800 text-sm sm:text-base truncate max-w-full">
                {leaderboard[2].name}
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-blue-600">
                {leaderboard[2].xp} XP
              </div>
              <div className="mt-2 w-full py-1 rounded-xl bg-orange-100 text-orange-800 font-black text-xs">
                Hạng 3
              </div>
            </motion.div>

          </div>

          {/* Rest of the ranks */}
          <div className="card-kid divide-y divide-slate-100 overflow-hidden bg-white">
            {leaderboard.slice(3).map((item) => (
              <div
                key={item.rank}
                className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-slate-100 font-bold text-slate-600 text-xs flex items-center justify-center">
                    {item.rank}
                  </span>
                  <span className="text-2xl">{item.avatar}</span>
                  <div>
                    <div className="font-display font-bold text-slate-800 text-sm sm:text-base">
                      {item.name}
                    </div>
                    <div className="text-xs font-semibold text-orange-600 flex items-center gap-1">
                      <span>🔥</span>
                      <span>{item.streak} ngày streak</span>
                    </div>
                  </div>
                </div>

                <div className="font-display font-black text-blue-600 text-base sm:text-lg">
                  {item.xp} <span className="text-xs font-bold text-slate-400">XP</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
