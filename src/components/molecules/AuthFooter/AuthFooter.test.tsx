import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { AuthFooter } from 'components/molecules';

import { Props as AuthFooterProps } from './AuthFooter';

describe('AuthFooter', () => {
  const mockOnClick = jest.fn<AuthFooterProps['onClick'], []>();

  const props: AuthFooterProps = {
    btnText: 'Footer Button',
    text: 'Footer Text',
    testId: 'auth-footer-test-id',
    onClick: mockOnClick,
  };

  it('should render footer containing text and button', () => {
    render(<AuthFooter {...props} />);

    const authFooter = screen.getByTestId('auth-footer-test-id');
    expect(authFooter).toHaveTextContent('Footer Text');

    const footerBtn = within(authFooter).getByTestId('btn-footer-test-id');
    expect(footerBtn).toHaveTextContent('Footer Button');
  });

  it('should display button that handles click events', async () => {
    render(<AuthFooter {...props} />);

    const authFooter = screen.getByTestId('auth-footer-test-id');
    const footerBtn = within(authFooter).getByTestId('btn-footer-test-id');

    await userEvent.click(footerBtn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = create(<AuthFooter {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
