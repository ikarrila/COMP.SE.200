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
        expect(toNumber(null)).toBe(NaN);
    });
    test('undefined', () => {
        expect(toNumber(undefined)).toBe(NaN);
    });
    test('empty string', () => {
        expect(toNumber('')).toBe(NaN);
    });
    test('boolean', () => {
        expect(toNumber(true)).toBe(NaN);
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
    test('symbol', () => {
        expect(toNumber(Symbol('symbol'))).toBe(NaN);
    });
    test('binary', () => {
        expect(toNumber('0b101')).toBe(5);
        expect(toNumber('0o12')).toBe(10);
    });
});