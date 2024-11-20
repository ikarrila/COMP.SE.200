import toNumber from '../toNumber';

//Test ID UC8
describe('toNumber', () => {
    test('input numeral string', () => {
        expect(toNumber('1')).toBe(1);
    });
    test('input float string', () => {
        expect(toNumber('1.1')).toBe(1.1);
    });
    test('input integer', () => {
        expect(toNumber(1)).toBe(1);
    });
    test('input float', () => {
        expect(toNumber(1.1)).toBe(1.1);
    });
    test('input string', () => {
        expect(toNumber('test')).toBe(NaN);
    });
    test('input null', () => {
        expect(toNumber(null)).toBe(NaN);
    });
    test('input undefined', () => {
        expect(toNumber(undefined)).toBe(NaN);
    });
    test('input empty string', () => {
        expect(toNumber('')).toBe(NaN);
    });
    test('input boolean', () => {
        expect(toNumber(true)).toBe(NaN);
    });
    test('input object', () => {
        expect(toNumber({})).toBe(NaN);
    });
    test('input array', () => {
        expect(toNumber([])).toBe(NaN);
    });
    test('input empty function', () => {
        expect(toNumber(() => { })).toBe(NaN);
    });
    test('input symbol', () => {
        expect(toNumber(Symbol('symbol'))).toBe(NaN);
    });
    test('input binary numbers', () => {
        expect(toNumber('0b101')).toBe(5);
        expect(toNumber('0o12')).toBe(10);
    });
});