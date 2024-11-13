import toNumber from '../toNumber';

//Test ID UC8
describe('toNumber', () => {
    test('integer string', () => {
        expect(toNumber('1')).toBe(1);
    });
    test('float string', () => {
        expect(toNumber('1.1')).toBe(1.1);
    });
    test('integer', () => {
        expect(toNumber(1)).toBe(1);
    });
    test('float', () => {
        expect(toNumber(1.1)).toBe(1.1);
    });
    test('string', () => {
        expect(toNumber('test')).toBe(NaN);
    });
    test('null', () => {
        expect(toNumber(null)).toBe(0);
    });
    test('undefined', () => {
        expect(toNumber(undefined)).toBe(NaN);
    });
    test('empty string', () => {
        expect(toNumber('')).toBe(0);
    });
    test('boolean', () => {
        expect(toNumber(true)).toBe(1);
    });
    test('object', () => {
        expect(toNumber({})).toBe(NaN);
    });
    test('array', () => {
        expect(toNumber([])).toBe(NaN);
    });
    test('function', () => {
        expect(toNumber(() => { })).toBe(NaN);
    });
});