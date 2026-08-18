import { Link } from 'react-router-dom';

const footerLinks = {
  'Khám phá': [
    { label: 'Trang chủ', to: '/' },
    { label: 'Chủ đề bài học', to: '/courses' },
    { label: 'Bài tập vui trắc nghiệm', to: '/quiz/1' },
    { label: 'Bảng vinh danh', to: '/leaderboard' },
  ],
  'Dành cho lớp học': [
    { label: 'Góc học tập cá nhân', to: '/dashboard' },
    { label: 'Cổng phụ huynh theo dõi', to: '/#parents' },
    { label: 'Tài liệu ôn tập Lớp 4', to: '/courses' },
    { label: 'Thử thách đố vui toán', to: '/quiz/1' },
  ],
  'Thông tin & Hỗ trợ': [
    { label: 'Về dự án Cây Tri Thức', to: '/' },
    { label: 'Phương pháp sư phạm', to: '/#features' },
    { label: 'Liên hệ Giáo viên chủ nhiệm', to: '/' },
    { label: 'Điều khoản & Bảo mật', to: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-green-400 rounded-2xl flex items-center justify-center text-xl shadow-md text-white">
                🌳
              </div>
              <span className="font-display font-black text-white text-xl tracking-tight">
                Toán Vui Cùng Thầy
              </span>
            </Link>

            <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-sm">
              Nền tảng học tập trực tuyến vui nhộn dành cho học sinh tiểu học, nuôi dưỡng đam mê tư duy toán học và làm chủ công nghệ từ sớm.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {['📘 Facebook', '📺 YouTube', '💬 Zalo Nhóm'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-bold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links (3 cols) */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <h3 className="font-display font-bold text-white text-base">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            © 2026 Toán Vui Cùng Thầy — Thiết kế & Phát triển với ❤️ vì thế hệ tương lai.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Hệ thống trực tuyến ổn định</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
