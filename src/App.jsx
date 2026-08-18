import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingDecorations from './components/FloatingDecorations';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';

function AppLayout() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <FloatingDecorations />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Home />} />
          <Route path="/leaderboard" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </HashRouter>
  );
}
