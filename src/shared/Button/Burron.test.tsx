import { render, screen } from '@testing-library/react';

import { Button, VariantButton } from './Button';

describe('Button test', () => {
  test('render Button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('render Button with clean theme', () => {
    render(<Button variant={VariantButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
