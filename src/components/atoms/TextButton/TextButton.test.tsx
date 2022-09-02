import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { TextButton } from 'components/atoms';

import { Props as TextButtonProps } from './TextButton';

describe('TextButton', () => {
  const mockOnClick = jest.fn();

  const props: TextButtonProps = {
    label: 'Test Button',
    testId: 'test-text-btn',
    type: 'button',
    onClick: mockOnClick,
  };

  it('renders button with text received through props', () => {
    render(<TextButton {...props} />);

    const textBtn = screen.getByTestId('test-text-btn');

    expect(textBtn).toHaveTextContent('Test Button');
  });

  it('handles click event, fires event handler once', async () => {
    render(<TextButton {...props} />);

    const textBtn = screen.getByTestId('test-text-btn');

    await userEvent.click(textBtn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const tree = create(<TextButton {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
