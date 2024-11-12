import filter from '../filter.js';

//Test ID UC1
describe("filter function", () => {
  test("filters an array based on a predicate", () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).toEqual([{ user: 'barney', active: true }]);
  });

  test("returns an empty array if no elements match the predicate", () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).toEqual([[]]);
  });

  test("handles an empty array", () => {
    const result = filter([], ({ active }) => active);
    expect(result).toEqual([[]]);
  });

  test("handles null or undefined array input", () => {
    const resultNull = filter(null, ({ active }) => active);
    const resultUndefined = filter(undefined, ({ active }) => active);

    expect(resultNull).toEqual([[]]);
    expect(resultUndefined).toEqual([[]]);
  });
});
