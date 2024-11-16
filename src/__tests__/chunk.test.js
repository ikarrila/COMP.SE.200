import chunk from '../chunk.js';

describe('chunk function', () => {
  test('splits an array into groups of the specified size', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 2);
    expect(result).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('handles arrays that cannot be split evenly', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 3);
    expect(result).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('handles size greater than array length', () => {
    const result = chunk(['a', 'b'], 5);
    expect(result).toEqual([['a', 'b']]);
  });

  test('handles size of 0 or less', () => {
    expect(chunk(['a', 'b', 'c'], 0)).toEqual([]);
    expect(chunk(['a', 'b', 'c'], -1)).toEqual([]);
  });

  test('returns an empty array if the input array is null or undefined', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  test('returns an empty array for empty input arrays', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('handles the default size of 1', () => {
    const result = chunk(['a', 'b', 'c']);
    expect(result).toEqual([['a'], ['b'], ['c']]);
  });

  test('converts non-integer sizes to integers', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 2.5);
    expect(result).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('handles size being a non-number (converts to 0)', () => {
    expect(chunk(['a', 'b', 'c'], 'string')).toEqual([]);
    expect(chunk(['a', 'b', 'c'], {})).toEqual([]);
  });
});
