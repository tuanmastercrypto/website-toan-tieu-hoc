import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Chị Minh Châu',
    role: 'Phụ huynh bạn Gia Huy (Lớp 4A)',
    avatar: '👩',
    content: 'Trước đây con rất sợ các bài toán tìm hai số khi biết tổng và hiệu. Từ khi học ở đây qua hình ảnh trực quan, con hiểu bản chất rất nhanh và hào hứng làm bài để tích lũy XP.',
    stars: 5,
  },
  {
    name: 'Thầy Nguyễn Hoàng',
    role: 'Giáo viên Chủ nhiệm Khối 4',
    avatar: '👨‍🏫',
    content: 'Website xây dựng bài giảng rất bám sát chuẩn kiến thức lớp 4, chia nhỏ từng bước từ dễ đến nâng cao. Giao diện trực quan, vui tươi kích thích sự tò mò của các em.',
    stars: 5,
  },
  {
    name: 'Bé Lan Anh',
    role: 'Học sinh Lớp 4B',
    avatar: '👧',
    content: 'Con thích nhất phần làm quiz được bắn pháo hoa giấy confetti và nhận huy hiệu! Giờ mỗi tối con đều vào học 20 phút để giữ chuỗi ngày streak ngọn lửa.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="pill-badge text-pink-700 bg-pink-50/80 border-pink-200 mb-3">
            💬 YÊU THƯƠNG & CHIA SẺ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mt-2">
            Cảm nhận từ <span className="text-pink-600">Thầy cô, Ba Mẹ & Các Bé</span>
          </h2>
        </motion.div>

        {/* Carousel Card */}
        <div className="max-w-2xl mx-auto">
          <div className="card-kid p-8 sm:p-10 bg-white relative text-center flex flex-col items-center">
            
            {/* Stars */}
            <div className="flex gap-1.5 justify-center mb-6">
              {[...Array(t.stars)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed mb-8 italic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                "{t.content}"
              </motion.p>
            </AnimatePresence>

            {/* Author */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 w-full justify-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl shadow-inner">
                {t.avatar}
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-slate-800 text-base leading-tight">
                  {t.name}
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  {t.role}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === current ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
