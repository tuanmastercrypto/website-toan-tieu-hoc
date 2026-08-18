import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { useApp } from '../context/AppContext';

export default function Courses() {
  const { user } = useApp();

  return (
    <section id="courses" className="py-20 relative z-10 bg-slate-50/60 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill-badge text-blue-700 bg-blue-50/80 border-blue-200 mb-3">
            📚 CHỦ ĐỀ TOÁN HỌC LỚP 4
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mt-2">
            Hành trình chinh phục <span className="text-blue-600">các kỹ năng</span>
          </h2>
          <p className="text-slate-600 font-medium text-base mt-3">
            Chọn một chủ đề yêu thích để bắt đầu khám phá bài giảng sinh động và luyện tập trắc nghiệm nhận thưởng.
          </p>
        </motion.div>

        {/* Grid 6 Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((course, i) => {
            const progress = user.courseProgress[course.id] ?? 0;
            return (
              <motion.div
                key={course.id}
                className="card-kid overflow-hidden flex flex-col justify-between group"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                {/* Header Banner */}
                <div className={`bg-gradient-to-r ${course.color} p-6 relative overflow-hidden text-white flex items-center justify-between`}>
                  <div className="relative z-10">
                    <span className="text-4xl block mb-2">{course.icon}</span>
                    <h3 className="font-display font-extrabold text-2xl tracking-tight text-white leading-tight">
                      {course.title}
                    </h3>
                  </div>

                  {course.badge && (
                    <span className="relative z-10 self-start text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-slate-900 shadow-xs">
                      {course.badge}
                    </span>
                  )}

                  {/* Decorative Background Large Icon */}
                  <span className="absolute -right-4 -bottom-4 text-7xl opacity-20 group-hover:scale-110 transition-transform">
                    {course.icon}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-5">
                      <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                        📖 {course.lessons} bài học
                      </span>
                      <span className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200/60">
                        ⭐ +{course.lessons * 20} XP
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                      <span className="text-slate-500">Tiến độ hoàn thành</span>
                      <span className={progress > 0 ? 'text-emerald-600' : 'text-slate-400'}>{progress}%</span>
                    </div>

                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-700"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <Link
                      to="/lesson/1"
                      className={`w-full py-2.5 rounded-full font-bold text-sm text-center block transition-all ${
                        progress > 0
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/30'
                          : 'bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      {progress > 0 ? 'Tiếp tục bài học 🚀' : 'Bắt đầu học ngay →'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
