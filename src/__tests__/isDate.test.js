import isDate from '../isDate';
//Test ID UC7
describe('isDate', () => {
    //Only this kind of value should be considered as date	
    test('date object', () => {
        expect(isDate(new Date())).toBe(true);
    });
    test('date string', () => {
        expect(isDate('2019-01-01')).toBe(false);
    });
    test('invalid date object', () => {
        expect(isDate(new Date('invalid input'))).toBe(false);
    });
    test('invalid date string', () => {
        expect(isDate('invalid input')).toBe(false);
    });
    test('number', () => {
        expect(isDate(1)).toBe(false);
    });
    test('null', () => {
        expect(isDate(null)).toBe(false);
    });
    test('undefined', () => {
        expect(isDate(undefined)).toBe(false);
    });
    test('empty string', () => {
        expect(isDate('')).toBe(false);
    });
    test('boolean', () => {
        expect(isDate(true)).toBe(false);
    });
    test('object', () => {
        expect(isDate({})).toBe(false);
    });
    test('array', () => {
        expect(isDate([])).toBe(false);
    });
    test('function', () => {
        expect(isDate(() => { })).toBe(false);
    });
    test('false', () => {
        expect(isDate(false)).toBe(false);
    });
});