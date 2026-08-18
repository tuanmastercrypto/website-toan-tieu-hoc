export const quizQuestions = [
  {
    id: 1,
    question: '34.567 + 21.384 = ?',
    emoji: '🔢',
    options: ['55.951', '55.851', '56.951', '54.951'],
    correct: 0,
    explanation: '34.567 + 21.384: Ta cộng từng cột từ phải sang trái → 55.951 ✓',
    xp: 20,
  },
  {
    id: 2,
    question: 'Hình chữ nhật có chiều dài 8cm, chiều rộng 5cm. Chu vi bằng bao nhiêu?',
    emoji: '📐',
    options: ['26 cm', '40 cm', '13 cm', '20 cm'],
    correct: 0,
    explanation: 'Chu vi = (chiều dài + chiều rộng) × 2 = (8 + 5) × 2 = 13 × 2 = 26 cm ✓',
    xp: 25,
  },
  {
    id: 3,
    question: 'Một cửa hàng có 240 quyển vở, đã bán ¼ số vở. Còn lại bao nhiêu quyển?',
    emoji: '📝',
    options: ['180 quyển', '60 quyển', '120 quyển', '200 quyển'],
    correct: 0,
    explanation: 'Đã bán: 240 ÷ 4 = 60 quyển. Còn lại: 240 - 60 = 180 quyển ✓',
    xp: 30,
  },
  {
    id: 4,
    question: 'Số nào tiếp theo trong dãy: 2, 4, 8, 16, __?',
    emoji: '🧩',
    options: ['32', '24', '18', '20'],
    correct: 0,
    explanation: 'Quy luật: mỗi số nhân 2. 16 × 2 = 32 ✓',
    xp: 20,
  },
  {
    id: 5,
    question: '5km 300m = ? m',
    emoji: '📏',
    options: ['5.300 m', '530 m', '53.000 m', '5.030 m'],
    correct: 0,
    explanation: '5km = 5.000m. Vậy 5km 300m = 5.000 + 300 = 5.300m ✓',
    xp: 20,
  },
];

export const quizSets = [
  { id: 1, title: 'Số học cơ bản', questions: [0, 1], difficulty: 'Dễ', xpTotal: 45 },
  { id: 2, title: 'Toán tổng hợp', questions: [0, 1, 2, 3, 4], difficulty: 'Trung bình', xpTotal: 115 },
];
