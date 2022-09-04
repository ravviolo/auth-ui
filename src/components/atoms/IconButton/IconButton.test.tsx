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
    testId: 'test-icon-btn',
    onClick: mockOnClick,
  };

  it('renders button with specified color and icon', () => {
    render(<IconButton {...props} />);

    const iconBtn = screen.getByTestId('test-icon-btn');

    expect(iconBtn).toHaveTextContent('F');

    const iconBtnStyle = window.getComputedStyle(iconBtn);

    expect(iconBtnStyle.color).toBe('cyan');
    expect(iconBtnStyle.borderColor).toBe('cyan');
  });

  it('handles click event, fires event handler once', async () => {
    render(<IconButton {...props} />);

    const iconBtn = screen.getByTestId('test-icon-btn');

    await userEvent.click(iconBtn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const tree = create(<IconButton {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
