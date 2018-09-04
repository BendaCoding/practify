import { getRankForPlayCount } from '../getRankForPlayCount';

describe('getRankForPlayCount', () => {
  it('should return 1 for values below 10', () => {
    expect(getRankForPlayCount(0)).toBe(1);
    expect(getRankForPlayCount(1)).toBe(1);
    expect(getRankForPlayCount(-1)).toBe(1);
    expect(getRankForPlayCount(9)).toBe(1);
  });
  
  it('should return 1 for undefined and null', () => {
    expect(getRankForPlayCount(null as any)).toBe(1);
    expect(getRankForPlayCount(undefined as any)).toBe(1);
  });
  
  it('should return 2 for values above and equal 10', () => {
    expect(getRankForPlayCount(10)).toBe(2);
    expect(getRankForPlayCount(11)).toBe(2);
    expect(getRankForPlayCount(20)).toBe(2);
    expect(getRankForPlayCount(24)).toBe(2);
  });
  
  it('should return 10 for highest values', () => {
    expect(getRankForPlayCount(2000)).toBe(10);
    expect(getRankForPlayCount(5000)).toBe(10);
  });
});
