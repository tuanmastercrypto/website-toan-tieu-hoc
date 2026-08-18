import { motion } from 'framer-motion';

const subtleStars = [
  { top: '15%', left: '8%', delay: 0, size: 14, color: '#a78bfa' },
  { top: '22%', right: '12%', delay: 1, size: 12, color: '#facc15' },
  { top: '50%', left: '4%', delay: 2, size: 16, color: '#60a5fa' },
  { top: '65%', right: '6%', delay: 0.5, size: 14, color: '#34d399' },
  { top: '85%', left: '10%', delay: 1.5, size: 12, color: '#f87171' },
];

function FourPointStar({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity="0.6">
      <path d="M12 2 L13.8 9.5 L21.5 12 L13.8 14.5 L12 22 L10.2 14.5 L2.5 12 L10.2 9.5 Z" />
    </svg>
  );
}

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {subtleStars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{ 
            top: star.top, 
            left: star.left, 
            right: star.right 
          }}
          animate={{ 
            y: [0, -12, 0], 
            opacity: [0.3, 0.8, 0.3], 
            scale: [0.9, 1.15, 0.9] 
          }}
          transition={{ 
            duration: 4, 
            delay: star.delay, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        >
          <FourPointStar size={star.size} color={star.color} />
        </motion.div>
      ))}
    </div>
  );
}
