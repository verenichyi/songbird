import { formatTime, calculateTime } from 'src/utils/helpers';

describe('Helper functions testing: ', () => {
  describe('calculateTime func: ', () => {
    it(` should return time in 'doubled-value minutes : doubled-value seconds' format`, () => {
      expect(calculateTime(10)).toBe(`00 : 10`);
      expect(calculateTime(0)).toBe(`00 : 00`);
    });

    it(` should not return time in 'one-value minutes : one-value seconds' format`, () => {
      expect(calculateTime(100)).not.toBe(`1 : 40`);
      expect(calculateTime(0)).not.toBe(`0 : 0`);
    });
  });

  describe('formatTime func: ', () => {
    it('should return doubled-value string', () => {
      expect(formatTime(10)).toBe('10');
      expect(formatTime(1)).toBe('01');
      expect(formatTime(0)).toBe('00');
    });

    it('should not return one-value string', () => {
      expect(formatTime(1)).not.toBe('1');
      expect(formatTime(0)).not.toBe('0');
    });
  });
});
