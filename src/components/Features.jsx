import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎮',
    title: 'Học qua trò chơi',
    desc: 'Mỗi bài toán là một thử thách phiêu lưu! Vừa chơi vừa ghi nhớ quy tắc số học tự nhiên.',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50/70',
    border: 'border-blue-100',
  },
  {
    icon: '👨‍🏫',
    title: 'Thầy cô đồng hành',
    desc: 'Phương pháp sư phạm trực quan, gợi mở tư duy từng bước cùng lời giải chi tiết, dễ hiểu.',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50/70',
    border: 'border-emerald-100',
  },
  {
    icon: '🗺️',
    title: 'Lộ trình bài bản',
    desc: 'Chia nhỏ bài học từ Số học, Hình học đến Toán có lời văn chuẩn khung chương trình Lớp 4.',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50/70',
    border: 'border-purple-100',
  },
  {
    icon: '📊',
    title: 'Báo cáo thông minh',
    desc: 'Theo dõi sự tiến bộ hàng tuần qua biểu đồ điểm số, chuỗi ngày streak và thời lượng học.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50/70',
    border: 'border-amber-100',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill-badge text-emerald-700 bg-emerald-50/80 border-emerald-200 mb-3">
            ✨ ĐIỂM NỔI BẬT ĐỘC ĐÁO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mt-2">
            Học toán thông minh, <span className="text-emerald-600">vui vẻ mỗi ngày</span>
          </h2>
          <p className="text-slate-600 font-medium text-base mt-3">
            Phương pháp học hiện đại kết hợp trò chơi giúp trẻ phát triển toàn diện cả tư duy logic lẫn kỹ năng giải quyết vấn đề.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={`card-kid p-7 text-center ${f.bgColor} border ${f.border} relative overflow-hidden flex flex-col items-center justify-between`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 bg-gradient-to-tr ${f.color} rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-md text-white`}>
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
