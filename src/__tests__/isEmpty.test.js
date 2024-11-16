import isEmpty from '../isEmpty';

// Test ID UC2
describe('isEmpty', () => {
    test('null is empty', () => {
        expect(isEmpty(null)).toBe(true);
    });
    test('undefined is empty', () => {
        expect(isEmpty(undefined)).toBe(true);
    });
    test('true is empty', () => {
        expect(isEmpty(true)).toBe(true);
    });
    test('false is empty', () => {
        expect(isEmpty(false)).toBe(true);
    });
    test('number is empty', () => {
        expect(isEmpty(1)).toBe(true);
    });
    test('empty array is empty', () => {
        expect(isEmpty([])).toBe(true);
    });
    test('non-empty array is not empty', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });
    test('empty string is empty', () => {
        expect(isEmpty('')).toBe(true);
    });
    test('non-empty string is not empty', () => {
        expect(isEmpty('abc')).toBe(false);
    });
    test('empty object is empty', () => {
        expect(isEmpty({})).toBe(true);
    });
    test('non-empty object is not empty', () => {
        expect(isEmpty({ a: 1 })).toBe(false);
    });
    test('empty Map is empty', () => {
        expect(isEmpty(new Map())).toBe(true);
    });
    test('non-empty Map is not empty', () => {
        const map = new Map();
        map.set('key', 'value');
        expect(isEmpty(map)).toBe(false);
    });
    test('empty Set is empty', () => {
        expect(isEmpty(new Set())).toBe(true);
    });
    test('non-empty Set is not empty', () => {
        const set = new Set();
        set.add(1);
        expect(isEmpty(set)).toBe(false);
    });
    test('buffer with data is not empty', () => {
        const buffer = Buffer.from([1, 2, 3]);
        expect(isEmpty(buffer)).toBe(false);
    });
    test('buffer with no data is empty', () => {
        const buffer = Buffer.alloc(0);
        expect(isEmpty(buffer)).toBe(true);
    });
    test('prototype object is empty', () => {
        function Test() {}
        Test.prototype.someProp = 'value';
        const testInstance = new Test();
        expect(isEmpty(testInstance)).toBe(true);
    });
    test('object with inherited property is not empty', () => {
        function Test() {}
        Test.prototype.someProp = 'value';
        const testInstance = new Test();
        testInstance.ownProp = 'ownValue';
        expect(isEmpty(testInstance)).toBe(false);
    });
    test('function is empty', () => {
        expect(isEmpty(() => {})).toBe(true);
    });
});
