import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { Checkbox } from 'components/atoms';

import { Props as CheckboxProps } from './Checkbox';

describe('Checkbox', () => {
  const props: CheckboxProps = {
    id: 'test-checkbox',
    name: 'test-checkbox',
    testId: 'checkbox-test-id',
  };

  it('should initially render unchecked', () => {
    render(<Checkbox {...props} />);

    const checkbox = screen.getByTestId('checkbox-test-id');

    expect(checkbox).not.toBeChecked();
  });

  it('should toggle checked state', async () => {
    render(<Checkbox {...props} />);

    const checkbox = screen.getByTestId('checkbox-test-id');

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it('should match snapshot', () => {
    const tree = create(<Checkbox {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
