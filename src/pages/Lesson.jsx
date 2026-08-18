import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { lessonContent } from '../data/courses';
import { useApp } from '../context/AppContext';
import { ChevronLeft, ChevronRight, CheckCircle2, Award, Clock } from 'lucide-react';

export default function Lesson() {
  const [currentSection, setCurrentSection] = useState(0);
  const [practiceAnswer, setPracticeAnswer] = useState('');
  const [practiceResult, setPracticeResult] = useState(null);
  const { addXP } = useApp();
  const navigate = useNavigate();

  const lesson = lessonContent;
  const section = lesson.sections[currentSection];
  const isLast = currentSection === lesson.sections.length - 1;
  const progress = ((currentSection + 1) / lesson.sections.length) * 100;

  const checkAnswer = () => {
    if (practiceAnswer.trim().replace(/\./g, '') === lesson.sections[currentSection].answer.replace(/\./g, '')) {
      setPracticeResult('correct');
      addXP(15);
    } else {
      setPracticeResult('wrong');
    }
  };

  const handleNext = () => {
    if (isLast) {
      addXP(lesson.xpReward);
      navigate('/quiz/1');
    } else {
      setCurrentSection((i) => i + 1);
      setPracticeAnswer('');
      setPracticeResult(null);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs transition-colors"
          >
            <ChevronLeft size={18} />
            <span>Quay lại Khóa học</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              <Clock size={14} />
              <span>{lesson.duration}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-black text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1.5 rounded-full">
              <Award size={14} />
              <span>+{lesson.xpReward} XP</span>
            </span>
          </div>
        </div>

        {/* Lesson Title & Global Progress */}
        <div className="card-kid p-6 bg-white mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">CHỦ ĐỀ 1: SỐ HỌC LỚP 4</span>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800 tracking-tight">
                {lesson.title}
              </h1>
            </div>
            <span className="text-xs font-extrabold text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
              Phần {currentSection + 1} / {lesson.sections.length}
            </span>
          </div>

          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Section Step Chips */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
            {lesson.sections.map((s, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSection(idx);
                  setPracticeAnswer('');
                  setPracticeResult(null);
                }}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  idx === currentSection
                    ? 'bg-blue-600 text-white shadow-sm'
                    : idx < currentSection
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {idx < currentSection ? '✓ ' : ''}{idx + 1}. {s.title.replace(/^[^\s]+\s/, '')}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Box */}
        <motion.div
          key={currentSection}
          className="card-kid p-7 sm:p-9 bg-white mb-6 border border-slate-200/80"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-display font-extrabold text-2xl text-slate-800 mb-4 pb-3 border-b border-slate-100">
            {section.title}
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed mb-6">
            {section.content}
          </p>

          {/* Theory Step Example */}
          {section.type === 'theory' && section.example && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200/80 rounded-2xl p-6 mb-4">
              <div className="font-display font-bold text-blue-900 text-lg mb-4 flex items-center gap-2">
                <span>📝</span>
                <span>Ví dụ mẫu: {section.example.problem}</span>
              </div>

              <div className="space-y-2.5">
                {section.example.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 bg-white/80 p-3 rounded-xl border border-blue-100">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-sm sm:text-base">{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-blue-200/80 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-600">Đáp số chính xác:</span>
                <span className="font-display font-black text-emerald-600 text-xl bg-emerald-50 px-3.5 py-1 rounded-xl border border-emerald-200">
                  {section.example.answer}
                </span>
              </div>
            </div>
          )}

          {/* Practice Section */}
          {section.type === 'practice' && (
            <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 mb-4">
              <div className="text-sm font-bold text-amber-800 bg-amber-100/80 px-3 py-1.5 rounded-xl inline-block mb-4">
                💡 Gợi ý tư duy: {section.hint}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={practiceAnswer}
                  onChange={(e) => setPracticeAnswer(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                  placeholder="Gõ kết quả phép tính..."
                  className="flex-1 px-4 py-3 rounded-2xl border-2 border-slate-200 font-bold text-slate-800 text-base focus:border-blue-500 focus:bg-white bg-white/80 outline-none transition-all"
                />
                <button
                  onClick={checkAnswer}
                  disabled={!practiceAnswer.trim()}
                  className="btn-primary-glow px-7 py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Kiểm tra kết quả
                </button>
              </div>

              {practiceResult === 'correct' && (
                <motion.div
                  className="mt-4 p-3.5 bg-emerald-100 border border-emerald-200 rounded-2xl text-emerald-800 font-bold flex items-center gap-2"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <CheckCircle2 size={20} className="text-emerald-600" />
                  <span>Chính xác tuyệt vời! Bạn được thưởng +15 XP 🌟</span>
                </motion.div>
              )}

              {practiceResult === 'wrong' && (
                <motion.div
                  className="mt-4 p-3.5 bg-rose-100 border border-rose-200 rounded-2xl text-rose-800 font-bold"
                  initial={{ x: -10 }}
                  animate={{ x: [0, -6, 6, -3, 3, 0] }}
                >
                  Chưa chính xác rồi. Kết quả đúng là <strong>{section.answer}</strong>. Cố lên nhé!
                </motion.div>
              )}
            </div>
          )}

          {/* Tip Section */}
          {section.type === 'tip' && (
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
              <div className="font-display font-bold text-purple-900 text-base mb-1">
                💡 Bí quyết tính nhanh:
              </div>
              <p className="text-sm sm:text-base font-medium text-purple-800 leading-relaxed">
                {section.content}
              </p>
            </div>
          )}
        </motion.div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentSection((i) => Math.max(0, i - 1))}
            disabled={currentSection === 0}
            className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            ← Phần trước
          </button>

          <button
            onClick={handleNext}
            className="btn-primary-glow px-8 py-3 text-base cursor-pointer"
          >
            <span>{isLast ? 'Luyện tập Quiz ngay' : 'Phần tiếp theo'}</span>
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
