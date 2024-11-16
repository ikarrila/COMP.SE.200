import get from '../get';

// Test ID UC5
describe('get', () => {
    test('gets a nested value using a string path', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a[0].b.c')).toBe(3);
    });
    test('gets a nested value using an array path', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });
    test('returns the default value if path does not exist', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a.b.c', 'default')).toBe('default');
    });
    test('returns undefined if path does not exist and no default value is provided', () => {
        const object = { a: [{ b: { c: 3 } }] };
        expect(get(object, 'a.b.c')).toBe(undefined);
    });
    test('handles null object with default value', () => {
        expect(get(null, 'a.b.c', 'default')).toBe('default');
    });
    test('handles null object without default value', () => {
        expect(get(null, 'a.b.c')).toBe(undefined);
    });
    test('handles undefined object with default value', () => {
        expect(get(undefined, 'a.b.c', 'default')).toBe('default');
    });
    test('handles undefined object without default value', () => {
        expect(get(undefined, 'a.b.c')).toBe(undefined);
    });
    test('handles empty object with default value', () => {
        expect(get({}, 'a.b.c', 'default')).toBe('default');
    });
    test('handles empty object without default value', () => {
        expect(get({}, 'a.b.c')).toBe(undefined);
    });
    test('gets value at top-level property', () => {
        const object = { a: 42 };
        expect(get(object, 'a')).toBe(42);
    });
    test('gets value at top-level property using array path', () => {
        const object = { a: 42 };
        expect(get(object, ['a'])).toBe(42);
    });
    test('handles empty string path', () => {
        const object = { '': 'emptyKey' };
        expect(get(object, '', 'default')).toBe('emptyKey');
    });
    test('handles invalid path with default value', () => {
        const object = { a: 42 };
        expect(get(object, 'invalid.path', 'default')).toBe('default');
    });
    test('handles invalid path without default value', () => {
        const object = { a: 42 };
        expect(get(object, 'invalid.path')).toBe(undefined);
    });
    test('handles deeply nested object with default value', () => {
        const object = { a: { b: { c: { d: { e: 42 } } } } };
        expect(get(object, 'a.b.c.d.e', 'default')).toBe(42);
    });
    test('handles deeply nested object without default value', () => {
        const object = { a: { b: { c: { d: { e: 42 } } } } };
        expect(get(object, 'a.b.c.d.e')).toBe(42);
    });
    test('returns default value for empty path', () => {
        const object = { a: 42 };
        expect(get(object, '', 'default')).toBe('default');
    });
});
