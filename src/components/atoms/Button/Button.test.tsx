import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { Button } from 'components/atoms';

import { Props as ButtonProps } from './Button';

describe('Button', () => {
  const mockOnClick = jest.fn<ButtonProps['onClick'], []>();

  const props: ButtonProps = {
    label: 'Test Button',
    testId: 'test-btn',
    type: 'button',
    onClick: mockOnClick,
  };

  it('displays text received via props', () => {
    render(<Button {...props} />);

    const btn = screen.getByTestId('test-btn');

    expect(btn).toHaveTextContent('Test Button');
  });

  it('handles click event, fires event handler once', async () => {
    render(<Button {...props} />);

    const btn = screen.getByTestId('test-btn');

    await userEvent.click(btn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const tree = create(<Button {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
