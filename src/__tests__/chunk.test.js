import chunk from '../chunk';

// Test ID UC3
describe('chunk', () => {
    test('splits array into chunks of size 2', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    });
    test('splits array into chunks of size 3', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    });
    test('splits array of size 1', () => {
        expect(chunk(['a'], 1)).toEqual([['a']]);
    });
    test('splits array with size greater than array length', () => {
        expect(chunk(['a', 'b', 'c'], 5)).toEqual([['a', 'b', 'c']]);
    });
    test('handles an empty array', () => {
        expect(chunk([], 2)).toEqual([]);
    });
    test('handles null array input', () => {
        expect(chunk(null, 2)).toEqual([]);
    });
    test('handles undefined array input', () => {
        expect(chunk(undefined, 2)).toEqual([]);
    });
    test('handles size 0', () => {
        expect(chunk(['a', 'b', 'c'], 0)).toEqual([]);
    });
    test('handles negative size', () => {
        expect(chunk(['a', 'b', 'c'], -1)).toEqual([]);
    });
    test('handles size as a floating point number', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2.5)).toEqual([['a', 'b'], ['c', 'd']]);
    });
    test('handles size as a string that can be converted to a number', () => {
        expect(chunk(['a', 'b', 'c', 'd'], '2')).toEqual([['a', 'b'], ['c', 'd']]);
    });
    test('handles size as a string that cannot be converted to a number', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 'invalid')).toEqual([]);
    });
});
