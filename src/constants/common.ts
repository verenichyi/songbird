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

export const indicators = [
  { id: 1, status: statuses.default },
  { id: 2, status: statuses.default },
  { id: 3, status: statuses.default },
  { id: 4, status: statuses.default },
  { id: 5, status: statuses.default },
  { id: 6, status: statuses.default },
];

export const instructions = {
  listenToPlayer: 'Послушайте плеер.',
  chooseBird: 'Выберите птицу из списка.',
};

export const testSelectors = {
  firstItemIndicator: 'ul > li:nth-child(1) > button > div',
  firstItemAnswerButton: `ul > li:nth-child(1) > button`,
  descriptionImage: `section[class=description] img[alt=bird]`,
  questionBirdName: `.birdName`,
};

export const hiddenStringReg = /(\*)+/gi;
export const nextLevelButton = 'Next Level';
export const lastLevel = 5;
export const maxLevelScore = 5;
export const maxScore = 30;
export const initialVolume = 0.5;
