import add from '../add';

//Test ID UC6
describe('add', () => {
    test('adds two numbers', () => {
        expect(add(6, 4)).toBe(10);
    });
    test('adds two negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });
    test('adds a positive and a negative number', () => {
        expect(add(1, -2)).toBe(-1);
    });
    test('adds two floating point numbers', () => {
        expect(add(1.1, 2.2)).toBeCloseTo(3.3);
    });
    test('add zero to a number', () => {
        expect(add(0, 1)).toBe(1);
    });
    test('add big numbers', () => {
        expect(add(9999999999999999, 1)).toBe(10000000000000000);
    });
    //If test fails the function accepts only one parameter
    //Which should not happen
    test('missing second parameter', () => {
        expect(add(99)).not.toBe(99);
    });
    test('missing all parameters', () => {
        expect(add()).toBe(0);
    });
    //Expecting function to only accept numbers
    //It should not return a string or work with strings
    test('string parameters', () => {
        expect(add('1', '2'))
            .not.toBe(3)
            .not.toBe(12)
            .not.toBe('12');
    });
});