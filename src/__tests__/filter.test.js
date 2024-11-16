import filter from '../filter';

// Test ID UC1
describe('filter', () => {
    test('filters an array based on a predicate', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{ user: 'barney', active: true }]);
    });

    test('returns an empty array when no elements match the predicate', () => {
        const users = [
            { user: 'barney', active: false },
            { user: 'fred', active: false },
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([]);
    });

    test('returns an empty array when the input array is empty', () => {
        const result = filter([], ({ active }) => active);
        expect(result).toEqual([]);
    });

    test('handles null input gracefully', () => {
        const result = filter(null, ({ active }) => active);
        expect(result).toEqual([]);
    });

    test('handles undefined input gracefully', () => {
        const result = filter(undefined, ({ active }) => active);
        expect(result).toEqual([]);
    });

    test('handles non-array input gracefully', () => {
        const result = filter(42, (value) => value > 0);
        expect(result).toEqual([]);
    });

    test('filters an array of numbers', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, (value) => value % 2 === 0);
        expect(result).toEqual([2, 4]);
    });

    test('filters an array of strings', () => {
        const strings = ['apple', 'banana', 'cherry'];
        const result = filter(strings, (value) => value.startsWith('b'));
        expect(result).toEqual(['banana']);
    });

    test('predicate receives correct arguments', () => {
        const array = [10, 20, 30];
        const spy = jest.fn(() => true);
        filter(array, spy);

        expect(spy).toHaveBeenCalledTimes(array.length);
        expect(spy).toHaveBeenNthCalledWith(1, 10, 0, array);
        expect(spy).toHaveBeenNthCalledWith(2, 20, 1, array);
        expect(spy).toHaveBeenNthCalledWith(3, 30, 2, array);
    });

    test('handles custom objects with a predicate', () => {
        const items = [
            { name: 'item1', value: 10 },
            { name: 'item2', value: 20 },
        ];
        const result = filter(items, (item) => item.value > 15);
        expect(result).toEqual([{ name: 'item2', value: 20 }]);
    });
});
