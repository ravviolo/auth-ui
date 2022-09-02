import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { Button } from 'components/atoms';

import { Props as ButtonProps } from './Button';

describe('Button', () => {
  const mockOnClick = jest.fn();

  const Props: ButtonProps = {
    label: 'Test Button',
    testId: 'test-btn',
    type: 'button',
    onClick: mockOnClick,
  };

  it('displays text received via props', () => {
    render(<Button {...Props} />);

    const btn = screen.getByTestId('test-btn');

    expect(btn).toHaveTextContent('Test Button');
  });

  it('handles click events', async () => {
    render(<Button {...Props} />);

    const btn = screen.getByTestId('test-btn');

    await userEvent.click(btn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const tree = create(<Button {...Props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
