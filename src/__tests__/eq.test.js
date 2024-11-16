import eq from '../eq';

// Test ID UC4
describe('eq', () => {
    test('compares identical objects', () => {
        const object = { a: 1 };
        expect(eq(object, object)).toBe(true);
    });
    test('compares different objects with the same content', () => {
        const object1 = { a: 1 };
        const object2 = { a: 1 };
        expect(eq(object1, object2)).toBe(false);
    });
    test('compares identical primitive strings', () => {
        expect(eq('a', 'a')).toBe(true);
    });
    test('compares a string with a String object', () => {
        expect(eq('a', Object('a'))).toBe(false);
    });
    test('compares numbers that are equal', () => {
        expect(eq(42, 42)).toBe(true);
    });
    test('compares a number with a different number', () => {
        expect(eq(42, 43)).toBe(false);
    });
    test('compares true with true', () => {
        expect(eq(true, true)).toBe(true);
    });
    test('compares false with false', () => {
        expect(eq(false, false)).toBe(true);
    });
    test('compares true with false', () => {
        expect(eq(true, false)).toBe(false);
    });
    test('compares null with null', () => {
        expect(eq(null, null)).toBe(true);
    });
    test('compares undefined with undefined', () => {
        expect(eq(undefined, undefined)).toBe(true);
    });
    test('compares null with undefined', () => {
        expect(eq(null, undefined)).toBe(false);
    });
    test('compares NaN with NaN', () => {
        expect(eq(NaN, NaN)).toBe(true);
    });
    test('compares zero with negative zero', () => {
        expect(eq(0, -0)).toBe(true);
    });
    test('compares a number with NaN', () => {
        expect(eq(42, NaN)).toBe(false);
    });
    test('compares an object with null', () => {
        const object = { a: 1 };
        expect(eq(object, null)).toBe(false);
    });
    test('compares a function with itself', () => {
        const func = () => {};
        expect(eq(func, func)).toBe(true);
    });
    test('compares two different functions', () => {
        const func1 = () => {};
        const func2 = () => {};
        expect(eq(func1, func2)).toBe(false);
    });
});
