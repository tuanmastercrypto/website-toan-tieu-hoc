import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(null);

const defaultUser = {
  name: 'Học sinh',
  avatar: '🦁',
  role: 'student',
  xp: 350,
  level: 4,
  streak: 5,
  totalDays: 12,
  coursesCompleted: 1,
  badgesEarned: ['first_lesson', 'streak_3', 'perfect_quiz'],
  courseProgress: { 1: 75, 2: 40, 3: 20, 4: 60, 5: 0, 6: 10 },
};

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('toanvui_user');
      return saved ? JSON.parse(saved) : defaultUser;
    } catch {
      return defaultUser;
    }
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('toanvui_user', JSON.stringify(user));
  }, [user]);

  const addXP = (amount) => {
    setUser(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 100) + 1;
      return { ...prev, xp: newXP, level: newLevel };
    });
    showNotification(`+${amount} XP! 🌟`);
  };

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2500);
  };

  const login = (name = 'Học sinh') => {
    setUser(prev => ({ ...prev, name }));
    setIsLoggedIn(true);
  };

  const logout = () => setIsLoggedIn(false);

  const updateProgress = (courseId, progress) => {
    setUser(prev => ({
      ...prev,
      courseProgress: { ...prev.courseProgress, [courseId]: progress },
    }));
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, login, logout, addXP, notification, updateProgress }}>
      {children}
      {notification && (
        <div className="fixed top-24 right-6 z-[9999] bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-5 py-3 rounded-2xl shadow-xl animate-bounce-in text-lg">
          {notification}
        </div>
      )}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
