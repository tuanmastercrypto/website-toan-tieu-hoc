import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../data/quizData';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import { ChevronLeft, Check, X, RotateCcw, Home, Sparkles } from 'lucide-react';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [finished, setFinished] = useState(false);
  const { addXP } = useApp();

  const q = quizQuestions[current];
  const progress = ((current + 1) / quizQuestions.length) * 100;

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#22c55e', '#facc15', '#f97316', '#a855f7'],
    });
  };

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);

    if (idx === q.correct) {
      setScore((s) => s + 1);
      setTotalXP((t) => t + q.xp);
      triggerConfetti();
      addXP(q.xp);
    }
  };

  const handleNext = () => {
    if (current === quizQuestions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setTotalXP(0);
    setFinished(false);
  };

  // Result Screen
  if (finished) {
    const percent = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center px-4 relative z-10">
        <motion.div
          className="max-w-md w-full card-kid p-8 sm:p-10 text-center bg-white border-2 border-slate-200/80 shadow-2xl"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.3 }}
        >
          <div className="text-6xl mb-3">
            {percent === 100 ? '🏆' : percent >= 80 ? '🌟' : percent >= 60 ? '👍' : '💪'}
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-800 mb-1">
            {percent === 100 ? 'Xuất sắc tuyệt đối!' : percent >= 80 ? 'Rất giỏi!' : 'Hoàn thành bài tập!'}
          </h2>
          <p className="text-sm font-semibold text-slate-500 mb-6">
            Em đã trả lời đúng {score} / {quizQuestions.length} câu hỏi
          </p>

          {/* XP Badge Reward */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
            <div className="font-display font-black text-2xl text-amber-600">
              +{totalXP} XP 🌟
            </div>
            <div className="text-xs font-bold text-amber-700">Điểm kinh nghiệm nhận được</div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={restartQuiz}
              className="btn-primary-glow w-full py-3 text-base justify-center cursor-pointer"
            >
              <RotateCcw size={18} />
              <span>Thử thách lại</span>
            </button>

            <Link
              to="/"
              className="w-full py-3 rounded-full border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              <Home size={18} />
              <span>Quay về trang chủ</span>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs transition-colors"
          >
            <ChevronLeft size={18} />
            <span>Thoát Quiz</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              Câu {current + 1} / {quizQuestions.length}
            </span>
            <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              {score} Đúng ✓
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Question Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <div className="card-kid p-7 sm:p-9 bg-white mb-6 text-center border border-slate-200/80">
              <span className="text-4xl block mb-3">{q.emoji}</span>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-800 leading-snug">
                {q.question}
              </h2>
              <span className="inline-block mt-3 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Thưởng +{q.xp} XP
              </span>
            </div>

            {/* 4 Answer Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {q.options.map((opt, idx) => {
                let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/50';

                if (answered) {
                  if (idx === q.correct) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400/40';
                  } else if (idx === selected) {
                    btnStyle = 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-400/40';
                  } else {
                    btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={answered}
                    className={`w-full p-4 rounded-2xl border-2 font-display font-bold text-base sm:text-lg flex items-center justify-between text-left transition-all cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 font-black text-sm flex items-center justify-center flex-shrink-0">
                        {OPTION_LABELS[idx]}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {answered && idx === q.correct && (
                      <Check size={22} className="text-emerald-600 flex-shrink-0" />
                    )}
                    {answered && idx === selected && idx !== q.correct && (
                      <X size={22} className="text-rose-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {answered && (
              <motion.div
                className={`p-5 rounded-2xl border mb-6 ${
                  selected === q.correct
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="font-bold text-sm mb-1 flex items-center gap-1.5">
                  {selected === q.correct ? (
                    <>
                      <span>🎉</span>
                      <span>Chính xác tuyệt vời! (+{q.xp} XP)</span>
                    </>
                  ) : (
                    <>
                      <span>💡</span>
                      <span>Chưa đúng rồi, cùng xem giải thích nhé:</span>
                    </>
                  )}
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  {q.explanation}
                </p>
              </motion.div>
            )}

            {answered && (
              <div className="flex justify-center">
                <button
                  onClick={handleNext}
                  className="btn-primary-glow px-10 py-3.5 text-base sm:text-lg cursor-pointer"
                >
                  <span>{current === quizQuestions.length - 1 ? 'Xem tổng kết điểm số 🏆' : 'Câu tiếp theo →'}</span>
                </button>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
