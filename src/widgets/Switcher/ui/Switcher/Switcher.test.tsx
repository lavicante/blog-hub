import { render, screen } from '@testing-library/react';
import i18n from 'app/i18n/i18n';

import { Switcher } from './Switcher';

describe('Button test', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('render Button', () => {
    render(<Switcher />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
