import { formatTime, calculateTime } from 'src/utils/helpers';

describe('Helper functions testing: ', () => {
  it('Format time func should return doubled-value string', () => {
    expect(formatTime(10)).toBe('10');
    expect(formatTime(1)).toBe('01');
    expect(formatTime(1)).not.toBe('1');
  });

  it(`Calculate time func should take time in seconds and return time in 'minutes : seconds' format`, () => {
    expect(calculateTime(1000)).toBe(`16 : 40`);
    expect(calculateTime(100)).toBe(`01 : 40`);
    expect(calculateTime(100)).not.toBe(`1 : 40`);
    expect(calculateTime(10)).toBe(`00 : 10`);
    expect(calculateTime(0)).toBe(`00 : 00`);
    expect(calculateTime(0)).not.toBe(`0 : 0`);
  });
});
