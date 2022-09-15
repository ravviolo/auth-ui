import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { TextButton } from 'components/atoms';

import { Props as TextButtonProps } from './TextButton';

describe('TextButton', () => {
  const mockOnClick = jest.fn<TextButtonProps['onClick'], []>();

  const props: TextButtonProps = {
    label: 'Test Button',
    testId: 'text-btn-test-id',
    onClick: mockOnClick,
  };

  it("should assign default type as 'button'", () => {
    render(<TextButton {...props} />);

    const textBtn = screen.getByTestId('text-btn-test-id');

    expect(textBtn).toHaveAttribute('type', 'button');
  });

  it('should render button with text received through props', () => {
    render(<TextButton {...props} />);

    const textBtn = screen.getByTestId('text-btn-test-id');

    expect(textBtn).toHaveTextContent('Test Button');
  });

  it('should handle click event, fires event handler once', async () => {
    render(<TextButton {...props} />);

    const textBtn = screen.getByTestId('text-btn-test-id');

    await userEvent.click(textBtn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = create(<TextButton {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
