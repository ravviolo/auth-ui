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
    testId: 'test-auth-footer',
    onClick: mockOnClick,
  };

  it('renders footer containing text and button', () => {
    render(<AuthFooter {...props} />);

    const authFooter = screen.getByTestId('test-auth-footer');
    expect(authFooter).toHaveTextContent('Footer Text');

    const footerBtn = within(authFooter).getByTestId('btn-footer');
    expect(footerBtn).toHaveTextContent('Footer Button');
  });

  it('displays button that handles click events', async () => {
    render(<AuthFooter {...props} />);

    const authFooter = screen.getByTestId('test-auth-footer');
    const footerBtn = within(authFooter).getByTestId('btn-footer');

    await userEvent.click(footerBtn);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const tree = create(<AuthFooter {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
