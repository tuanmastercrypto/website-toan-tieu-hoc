import { motion } from 'framer-motion';

const parentPoints = [
  { icon: '📈', title: 'Báo cáo chi tiết', desc: 'Xem biểu đồ tiến độ làm bài, tỷ lệ trả lời đúng theo từng dạng toán.' },
  { icon: '⏰', title: 'Quản lý thời gian', desc: 'Nắm bắt thời lượng học tập mỗi ngày, tự động nhắc nhở vừa học vừa nghỉ ngơi.' },
  { icon: '💡', title: 'Gợi ý bài ôn tập', desc: 'Hệ thống tự nhận diện các dạng toán con hay nhầm để đề xuất bài tập củng cố.' },
  { icon: '🔔', title: 'Thông báo kết quả', desc: 'Cập nhật ngay khi con hoàn thành một bài học hoặc nhận được huy hiệu mới.' },
];

export default function ForParents() {
  return (
    <section id="parents" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden">
          
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-100">
                👨‍👩‍👧 DÀNH CHO PHỤ HUYNH & THẦY CÔ
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Đồng hành cùng sự tiến bộ từng ngày của con
              </h2>
              <p className="text-blue-100 text-base font-medium leading-relaxed">
                Nền tảng cung cấp không gian báo cáo trực quan giúp cha mẹ dễ dàng thấu hiểu năng lực, điểm mạnh và điểm cần cải thiện của con mà không gây áp lực.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => alert('Tính năng cổng phụ huynh đang kết nối dữ liệu lớp học!')}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-display font-bold text-base px-7 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Đăng ký tài khoản Phụ huynh →
                </button>
              </div>
            </div>

            {/* Right Feature Boxes (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {parentPoints.map((p, i) => (
                <motion.div
                  key={i}
                  className="bg-white/15 backdrop-blur-md border border-white/20 p-5 rounded-2xl"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
