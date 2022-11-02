import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';

import { Counter } from './Counter';

describe('Counter', () => {
  test('with only first param', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('counter')).toHaveTextContent('10');
  });

  test('increment', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('counter-btn-inc'));
    expect(screen.getByTestId('counter')).toHaveTextContent('11');
  });

  test('decrement', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    fireEvent.click(screen.getByTestId('counter-btn-dec'));
    expect(screen.getByTestId('counter')).toHaveTextContent('9');
  });
});
