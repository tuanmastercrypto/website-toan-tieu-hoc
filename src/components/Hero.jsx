import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const skillBubbles = [
  // Left side bubbles
  {
    icon: '🧠',
    label: 'Chiều sâu tâm thức',
    color: 'from-purple-500 to-indigo-500',
    border: 'border-purple-200',
    pos: 'top-[12%] -left-2 sm:-left-6',
    delay: 0,
    floatDuration: 4.2
  },
  {
    icon: '🌟',
    label: 'Tư duy logic & toán',
    color: 'from-emerald-400 to-green-600',
    border: 'border-emerald-200',
    pos: 'top-[44%] -left-4 sm:-left-8',
    delay: 0.3,
    floatDuration: 3.8
  },
  {
    icon: '🚀',
    label: 'Say mê sáng tạo',
    color: 'from-rose-400 to-red-500',
    border: 'border-rose-200',
    pos: 'top-[74%] -left-1 sm:-left-4',
    delay: 0.6,
    floatDuration: 4.5
  },
  // Right side bubbles
  {
    icon: '💡',
    label: 'Tư duy hệ thống',
    color: 'from-amber-400 to-yellow-500',
    border: 'border-amber-200',
    pos: 'top-[10%] -right-2 sm:-right-6',
    delay: 0.2,
    floatDuration: 3.9
  },
  {
    icon: '🧩',
    label: 'Giải quyết vấn đề',
    color: 'from-orange-400 to-amber-600',
    border: 'border-orange-200',
    pos: 'top-[42%] -right-4 sm:-right-8',
    delay: 0.5,
    floatDuration: 4.3
  },
  {
    icon: '</>',
    label: 'Kỹ năng AI & Số',
    color: 'from-blue-500 to-cyan-500',
    border: 'border-blue-200',
    pos: 'top-[72%] -right-1 sm:-right-4',
    delay: 0.8,
    floatDuration: 3.7
  },
];

function KnowledgeTreeIllustration() {
  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-[1/1] mx-auto flex items-center justify-center select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-4 bg-gradient-to-tr from-green-200/40 via-blue-200/30 to-amber-100/40 rounded-full blur-2xl -z-10" />

      {/* SVG Tree & Characters */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="trunkGrad" x1="220" y1="260" x2="280" y2="440" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a16207" />
            <stop offset="0.6" stopColor="#78350f" />
            <stop offset="1" stopColor="#451a03" />
          </linearGradient>

          <linearGradient id="foliageGrad1" x1="160" y1="60" x2="340" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4ade80" />
            <stop offset="0.5" stopColor="#22c55e" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="foliageGrad2" x1="120" y1="120" x2="250" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#86efac" />
            <stop offset="1" stopColor="#16a34a" />
          </linearGradient>

          <linearGradient id="foliageGrad3" x1="250" y1="120" x2="380" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34d399" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="groundGrad" x1="60" y1="440" x2="440" y2="440" gradientUnits="userSpaceOnUse">
            <stop stopColor="#bbf7d0" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#86efac" />
            <stop offset="1" stopColor="#bbf7d0" stopOpacity="0.8" />
          </linearGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Grassy Mound */}
        <ellipse cx="250" cy="435" rx="190" ry="32" fill="url(#groundGrad)" />
        <ellipse cx="250" cy="432" rx="140" ry="18" fill="#4ade80" fillOpacity="0.4" />

        {/* Tree Trunk */}
        <path
          d="M225 240 C225 310 210 380 185 435 L315 435 C290 380 275 310 275 240 Z"
          fill="url(#trunkGrad)"
        />
        {/* Tree Roots Details */}
        <path d="M210 410 C200 425 185 435 170 438" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
        <path d="M290 410 C300 425 315 435 330 438" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
        <circle cx="250" cy="330" r="14" fill="#451a03" fillOpacity="0.7" />

        {/* Tree Canopy (Foliage Clusters) */}
        {/* Back Foliage */}
        <circle cx="250" cy="180" r="115" fill="url(#foliageGrad1)" filter="url(#softShadow)" />
        <circle cx="170" cy="190" r="85" fill="url(#foliageGrad2)" />
        <circle cx="330" cy="190" r="85" fill="url(#foliageGrad3)" />
        
        {/* Top/Front Foliage */}
        <circle cx="250" cy="130" r="90" fill="#22c55e" />
        <circle cx="220" cy="120" r="65" fill="#4ade80" />
        <circle cx="280" cy="130" r="60" fill="#86efac" fillOpacity="0.9" />

        {/* Foliage Highlights & Fruit Spots */}
        <circle cx="190" cy="150" r="16" fill="#bbf7d0" fillOpacity="0.8" />
        <circle cx="310" cy="160" r="14" fill="#bbf7d0" fillOpacity="0.8" />
        <circle cx="250" cy="90" r="12" fill="#dcfce7" />

        {/* Sparkling Fruits / Knowledge Orbs */}
        <circle cx="155" cy="205" r="8" fill="#fbbf24" />
        <circle cx="345" cy="195" r="8" fill="#f97316" />
        <circle cx="220" cy="75" r="7" fill="#f43f5e" />
        <circle cx="285" cy="85" r="8" fill="#38bdf8" />
        <circle cx="250" cy="190" r="9" fill="#a855f7" />

        {/* 3 Kids Under the Tree */}
        
        {/* Kid 1 (Left - Reading Book) */}
        <g transform="translate(135, 360)">
          {/* Shadow */}
          <ellipse cx="25" cy="65" rx="20" ry="6" fill="#0f172a" fillOpacity="0.15" />
          {/* Body */}
          <rect x="12" y="32" width="26" height="30" rx="10" fill="#3b82f6" />
          {/* Head */}
          <circle cx="25" cy="20" r="14" fill="#fed7aa" />
          {/* Hair */}
          <path d="M11 20 C11 9 39 9 39 20 C39 12 34 8 25 8 C16 8 11 12 11 20 Z" fill="#451a03" />
          {/* Eyes & Smile */}
          <circle cx="21" cy="20" r="2" fill="#1e293b" />
          <circle cx="29" cy="20" r="2" fill="#1e293b" />
          <path d="M23 25 Q25 27 27 25" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
          {/* Glasses */}
          <rect x="18" y="17" width="6" height="5" rx="2" fill="none" stroke="#2563eb" strokeWidth="1.2" />
          <rect x="26" y="17" width="6" height="5" rx="2" fill="none" stroke="#2563eb" strokeWidth="1.2" />
          {/* Book */}
          <path d="M12 48 L25 44 L38 48 L36 60 L25 56 L14 60 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="25" y1="44" x2="25" y2="56" stroke="#ca8a04" strokeWidth="1.5" />
        </g>

        {/* Kid 2 (Center - Using Laptop) */}
        <g transform="translate(225, 355)">
          {/* Shadow */}
          <ellipse cx="25" cy="70" rx="24" ry="7" fill="#0f172a" fillOpacity="0.18" />
          {/* Body */}
          <rect x="10" y="32" width="30" height="32" rx="12" fill="#ec4899" />
          {/* Head */}
          <circle cx="25" cy="19" r="15" fill="#fde047" fillOpacity="0.2" />
          <circle cx="25" cy="19" r="14" fill="#ffedd5" />
          {/* Hair (Ponytail/Ribbon) */}
          <path d="M11 19 C11 8 39 8 39 19 C39 9 34 5 25 5 C16 5 11 9 11 19 Z" fill="#713f12" />
          <circle cx="38" cy="14" r="5" fill="#f43f5e" />
          {/* Face */}
          <circle cx="21" cy="19" r="2" fill="#1e293b" />
          <circle cx="29" cy="19" r="2" fill="#1e293b" />
          <path d="M22 24 Q25 27 28 24" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" />
          {/* Laptop */}
          <path d="M14 60 L25 46 L36 60 Z" fill="#94a3b8" />
          <rect x="16" y="47" width="18" height="12" rx="2" fill="#38bdf8" />
          <circle cx="25" cy="53" r="2" fill="#ffffff" />
        </g>

        {/* Kid 3 (Right - Writing in Notebook) */}
        <g transform="translate(315, 360)">
          {/* Shadow */}
          <ellipse cx="25" cy="65" rx="20" ry="6" fill="#0f172a" fillOpacity="0.15" />
          {/* Body */}
          <rect x="12" y="32" width="26" height="30" rx="10" fill="#10b981" />
          {/* Head */}
          <circle cx="25" cy="20" r="14" fill="#fed7aa" />
          {/* Hair Cap */}
          <path d="M11 17 C11 8 39 8 39 17 Z" fill="#f97316" />
          <path d="M36 17 L44 19 L38 22 Z" fill="#ea580c" />
          {/* Face */}
          <circle cx="21" cy="21" r="2" fill="#1e293b" />
          <circle cx="29" cy="21" r="2" fill="#1e293b" />
          <path d="M23 26 Q25 28 27 26" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
          {/* Notepad & Pencil */}
          <rect x="16" y="48" width="18" height="14" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="20" y1="52" x2="30" y2="52" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="20" y1="56" x2="28" y2="56" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="32" y1="44" x2="36" y2="54" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>

      {/* 6 Skill Bubbles Positioned Around Canopy */}
      {skillBubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute ${b.pos} z-20`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -7, 0]
          }}
          transition={{
            opacity: { duration: 0.4, delay: b.delay },
            scale: { duration: 0.4, delay: b.delay, type: 'spring' },
            y: { duration: b.floatDuration, repeat: Infinity, ease: 'easeInOut', delay: b.delay }
          }}
        >
          <div className={`skill-pill border ${b.border}`}>
            <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr ${b.color} flex items-center justify-center text-white text-xs sm:text-sm font-black shadow-xs flex-shrink-0`}>
              {b.icon}
            </span>
            <span className="text-slate-800 text-xs sm:text-sm font-bold tracking-tight">
              {b.label}
            </span>
          </div>
        </motion.div>
      ))}

    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Decorative Soft Gradients */}
      <div className="absolute top-12 left-1/10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs (7 cols on lg) */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Pill Badge */}
            <div>
              <span className="pill-badge border-blue-200 text-blue-800 bg-blue-50/60">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span>LÀM CHỦ TƯ DUY CÔNG NGHỆ & TOÁN HỌC</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-black text-slate-800 tracking-tight leading-[1.15]">
                Muốn biết phải hỏi,
              </h1>
              <div className="relative inline-block">
                <span className="font-display text-4xl sm:text-5xl xl:text-6xl font-black text-blue-600 tracking-tight leading-[1.15]">
                  muốn giỏi phải học.
                </span>
                {/* Curved Underline SVG */}
                <svg
                  className="w-full h-3.5 sm:h-4 text-blue-500 mt-1"
                  viewBox="0 0 350 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11.5C80 3.5 240 3.5 347 11.5"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Nuôi dưỡng tư duy toán học & kỹ năng công nghệ từ sớm cho học sinh lớp 4 — 
              nơi <strong className="text-blue-600 font-bold">sáng tạo</strong>, <strong className="text-emerald-600 font-bold">logic</strong> và{' '}
              <strong className="text-amber-600 font-bold">đam mê</strong> cùng phát triển tươi tốt dưới tán cây tri thức.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/lesson/1" className="btn-primary-glow text-base px-8 py-3.5 sm:text-lg">
                <span>Vào lớp của mình</span>
                <span className="text-xl">🚀</span>
              </Link>
              
              <Link
                to="/courses"
                className="text-slate-600 hover:text-blue-600 font-bold text-sm sm:text-base underline underline-offset-4 px-3 py-2 transition-colors"
              >
                Đã có tài khoản?
              </Link>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">👨‍🎓</span>
                <div className="text-left">
                  <div className="font-display font-extrabold text-slate-800 text-lg leading-tight">500+</div>
                  <div className="text-xs font-semibold text-slate-500">Học sinh tích cực</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📚</span>
                <div className="text-left">
                  <div className="font-display font-extrabold text-slate-800 text-lg leading-tight">50+</div>
                  <div className="text-xs font-semibold text-slate-500">Bài giảng sinh động</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-2xl">⭐</span>
                <div className="text-left">
                  <div className="font-display font-extrabold text-slate-800 text-lg leading-tight">4.9/5</div>
                  <div className="text-xs font-semibold text-slate-500">Phụ huynh tin yêu</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Tree Illustration (5-6 cols on lg) */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <KnowledgeTreeIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
