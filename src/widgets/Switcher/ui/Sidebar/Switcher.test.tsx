import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    ComponentRender(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
