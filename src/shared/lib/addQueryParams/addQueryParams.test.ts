import { getSearchParams } from './addQueryParams';

describe('getSearchParams tests', () => {
  test('one params', () => {
    const expected = '?one=1';
    expect(getSearchParams({ one: '1' })).toBe(expected);
  });

  test('two params', () => {
    const expected = '?one=1&two=2';
    expect(getSearchParams({ one: '1', two: '2' })).toBe(expected);
  });

  test('with undefined params', () => {
    const expected = '?one=1';
    expect(getSearchParams({ one: '1', two: undefined })).toBe(expected);
  });
});
