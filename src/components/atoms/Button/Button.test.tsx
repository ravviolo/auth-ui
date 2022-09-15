import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { Button } from 'components/atoms';

import { Props as ButtonProps } from './Button';

describe('Button', () => {
  const mockOnClick = jest.fn<ButtonProps['onClick'], []>();

  const props: ButtonProps = {
    label: 'Test Button',
    testId: 'btn-test-id',
    onClick: mockOnClick,
  };

  it("should assign default type as 'button'", () => {
    render(<Button {...props} />);

    const btn = screen.getByTestId('btn-test-id');

    expect(btn).toHaveAttribute('type', 'button');
  });

  it('should display text received via props', () => {
    render(<Button {...props} />);

    const btn = screen.getByTestId('btn-test-id');

    expect(btn).toHaveTextContent('Test Button');
  });

  it('should handle click event, fires event handler once', async () => {
    render(<Button {...props} />);

    const btn = screen.getByTestId('btn-test-id');

    await userEvent.click(btn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = create(<Button {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
