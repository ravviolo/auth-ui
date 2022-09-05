import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { IconButton } from 'components/atoms';

import { Props as IconButtonProps } from './IconButton';

describe('IconButton', () => {
  const mockOnClick = jest.fn<IconButtonProps['onClick'], []>();

  const props: IconButtonProps = {
    color: 'cyan',
    icon: 'F',
    type: 'button',
    testId: 'icon-btn-test-id',
    onClick: mockOnClick,
  };

  it('should render button with specified color and icon', () => {
    render(<IconButton {...props} />);

    const iconBtn = screen.getByTestId('icon-btn-test-id');

    expect(iconBtn).toHaveTextContent('F');

    const iconBtnStyle = window.getComputedStyle(iconBtn);

    expect(iconBtnStyle.color).toBe('cyan');
    expect(iconBtnStyle.borderColor).toBe('cyan');
  });

  it('should handle click event, fires event handler once', async () => {
    render(<IconButton {...props} />);

    const iconBtn = screen.getByTestId('icon-btn-test-id');

    await userEvent.click(iconBtn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = create(<IconButton {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
