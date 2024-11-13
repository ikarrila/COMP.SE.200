import isLength from '../isLength';

//Test ID UC10
describe('isLength', () => {
    test('positive integer', () => {
        expect(isLength(1)).toBe(true);
    });
    test('zero', () => {
        expect(isLength(0)).toBe(true);
    });
    test('negative integer', () => {
        expect(isLength(-1)).toBe(false);
    });
    test('float', () => {
        expect(isLength(1.1)).toBe(false);
    });
    test('max safe integer', () => {
        expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true);
    });
    test('max safe integer + 1', () => {
        expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    });
});