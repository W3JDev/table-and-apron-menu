import { Language, Icons } from '../types/menu';

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' }
];

export const icons: Icons = {
  nuts: '🥜',
  seafood: '🦐',
  gluten: '🌾',
  dairy: '🥛',
  vegetarian: '🥬',
  vegan: '🌱',
  spicy: '🌶️',
  alcohol: '🍷',
  pork: '🥓',
  eggs: '🥚',
  sharing: '👥',
  raw: '🐟',
  popular: '⭐',
  halal: '☪️'
};

export const uiTranslations = {
  en: {
    askAboutMenu: "How can I help you with our menu today?",
    placeholder: "Ask about menu items, allergies, or get recommendations..."
  },
  zh: {
    askAboutMenu: "今天我能为您介绍些什么菜品？",
    placeholder: "询问菜品、过敏原或获取推荐..."
  },
  vi: {
    askAboutMenu: "Tôi có thể giúp gì cho bạn với thực đơn hôm nay?",
    placeholder: "Hỏi về món ăn, dị ứng hoặc nhận đề xuất..."
  },
  ms: {
    askAboutMenu: "Bagaimana saya boleh bantu anda dengan menu hari ini?",
    placeholder: "Tanya tentang menu, alahan atau dapatkan cadangan..."
  }
};