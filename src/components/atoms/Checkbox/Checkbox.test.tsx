import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { Checkbox } from 'components/atoms';

import { Props as CheckboxProps } from './Checkbox';

describe('Checkbox', () => {
  const Props: CheckboxProps = {
    id: 'test-checkbox',
    name: 'test-checkbox',
    testId: 'test-checkbox',
  };

  it('renders unchecked', () => {
    render(<Checkbox {...Props} />);

    const checkbox = screen.getByTestId('test-checkbox');

    expect(checkbox).not.toBeChecked();
  });

  it('toggles checked state', async () => {
    render(<Checkbox {...Props} />);

    const checkbox = screen.getByTestId('test-checkbox');

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it('matches snapshot', () => {
    const tree = create(<Checkbox {...Props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
