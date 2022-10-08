import { classNames } from './index';

describe('classNames tests', () => {
  test('single class', () => {
    const expected = 'single';
    expect(classNames('single')).toBe(expected);
  });

  test('class with additional', () => {
    const expected = 'single additional';
    expect(classNames('single', ['aditional']));
  });

  test('class with additional and mode true', () => {
    const expected = 'single additional mode';
    expect(classNames('single', ['aditional'], { mode: true }));
  });

  test('class with additional and mode false', () => {
    const expected = 'single additional';
    expect(classNames('single', ['aditional'], { mode: false }));
  });

  test('class with undefined additional', () => {
    const expected = 'single additional';
    expect(classNames('single', [undefined]));
  });
});
