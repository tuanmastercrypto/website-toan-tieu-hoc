import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, BookOpen, Trophy, LayoutDashboard, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const navLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/courses', label: 'Khóa học' },
  { to: '/quiz/1', label: 'Bài tập vui' },
  { to: '/leaderboard', label: 'Bảng xếp hạng' },
  { to: '/dashboard', label: 'Góc học tập' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isLoggedIn, login } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
        : 'bg-white/80 backdrop-blur-sm py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 via-blue-500 to-green-400 rounded-2xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl">🌳</span>
            </div>
            <div>
              <div className="font-display font-extrabold text-slate-800 text-xl tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                Toán Vui
              </div>
              <div className="text-[11px] font-semibold text-slate-500 tracking-wide uppercase mt-0.5">
                Cùng Thầy & Bạn
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
            {navLinks.map(link => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {isLoggedIn ? (
              <Link 
                to="/dashboard"
                className="flex items-center gap-2.5 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/70 rounded-full px-3.5 py-1.5 transition-colors"
              >
                <span className="text-xl">{user.avatar}</span>
                <span className="font-bold text-slate-700 text-sm">{user.name}</span>
                <span className="text-xs bg-amber-400 text-amber-950 font-black px-2 py-0.5 rounded-full shadow-xs">
                  {user.xp} XP
                </span>
              </Link>
            ) : (
              <button
                onClick={() => login('Bạn Nhỏ Lớp 4')}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 px-3 py-2 transition-colors cursor-pointer"
              >
                Đăng nhập
              </button>
            )}

            <Link 
              to="/lesson/1" 
              className="btn-primary-glow px-5 py-2.5 text-sm"
            >
              <span>Vào lớp của mình</span>
              <span className="text-base">🚀</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-2xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map(link => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-blue-600" />}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            {!isLoggedIn ? (
              <button
                onClick={() => login('Bạn Nhỏ Lớp 4')}
                className="w-full py-3 rounded-2xl border-2 border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Đăng nhập tài khoản
              </button>
            ) : (
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{user.avatar}</span>
                  <span className="font-bold text-slate-800">{user.name}</span>
                </div>
                <span className="text-xs bg-amber-400 text-amber-950 font-black px-2.5 py-1 rounded-full">
                  {user.xp} XP
                </span>
              </div>
            )}

            <Link 
              to="/lesson/1" 
              className="btn-primary-glow w-full py-3 text-base"
            >
              <span>Vào lớp của mình</span>
              <span>🚀</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
