import { generateIndicators } from 'src/utils/helpers';

export const nav = [
  { id: 0, title: 'Разминка' },
  { id: 1, title: 'Воробьиные' },
  { id: 2, title: 'Лесные птицы' },
  { id: 3, title: 'Певчие птицы' },
  { id: 4, title: 'Хищные птицы' },
  { id: 5, title: 'Морские птицы' },
];

export const statuses = {
  default: 'default',
  fail: 'fail',
  success: 'success',
};

export const indicators = generateIndicators(6);

export const mockName = '******';
export const lastLevel = 5;
export const maxLevelScore = 5;
export const maxScore = 30;
export const initialVolume = 0.5;
