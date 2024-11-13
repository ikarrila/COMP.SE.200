import reduce from '../reduce';

//Test ID UC9
describe('reduce', () => {
    test('reduce array of numbers to sum', () => {
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
    });
    test('reduce negative numbers to sum', () => {
        expect(reduce([-1, -2], (sum, n) => sum + n, 0)).toBe(-3);
    });
    test('reduce array of numbers to product', () => {
        expect(reduce([1, 2], (product, n) => product * n, 1)).toBe(2);
    });
    //Example taken from documentation
    test('subarray of numbers to sum', () => {
        expect(reduce(
            { 'a': 1, 'b': 2, 'c': 1 },
            (result, value, key) => {
                if (!result[value]) {
                    result[value] = [];
                }
                result[value].push(key);
                return result;
            }
            , {})).toEqual({ '1': ['a', 'c'], '2': ['b'] });
    });
});