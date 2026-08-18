import Hero from '../components/Hero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Achievements from '../components/Achievements';
import Leaderboard from '../components/Leaderboard';
import ForParents from '../components/ForParents';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Courses />
      <Achievements />
      <Leaderboard />
      <ForParents />
      <Testimonials />
    </main>
  );
}
