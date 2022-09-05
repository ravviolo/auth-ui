import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { AuthSocials } from 'components/molecules';

import { Props as AuthSocialsProps } from './AuthSocials';

describe('AuthSocials', () => {
  const mockOnClickGoogle = jest.fn<AuthSocialsProps['onClickGoogle'], []>();
  const mockOnClickFacebook = jest.fn<
    AuthSocialsProps['onClickFacebook'],
    []
  >();
  const mockOnClickLinkedIn = jest.fn<
    AuthSocialsProps['onClickLinkedIn'],
    []
  >();

  const props: AuthSocialsProps = {
    testId: 'auth-socials-test-id',
    onClickFacebook: mockOnClickFacebook,
    onClickGoogle: mockOnClickGoogle,
    onClickLinkedIn: mockOnClickLinkedIn,
  };

  it('should render icon buttons for authenticating through socials', () => {
    render(<AuthSocials {...props} />);

    const authSocials = screen.getByTestId('auth-socials-test-id');

    const socialsIconBtns = within(authSocials).getAllByTestId(
      /icon-btn-([A-Z])\w+-test-id/i
    );

    expect(socialsIconBtns).toHaveLength(3);
  });

  it('should handle click events on Facebook icon - run handler once, not trigger other handlers', async () => {
    render(<AuthSocials {...props} />);

    const authSocials = screen.getByTestId('auth-socials-test-id');
    const facebookIconBtn = within(authSocials).getByTestId(
      /icon-btn-facebook-test-id/i
    );

    await userEvent.click(facebookIconBtn);

    expect(mockOnClickFacebook).toHaveBeenCalledTimes(1);
    expect(mockOnClickGoogle).not.toBeCalled();
    expect(mockOnClickLinkedIn).not.toBeCalled();
  });

  it('should handle click events on Google icon - run handler once, not trigger other handlers', async () => {
    render(<AuthSocials {...props} />);

    const authSocials = screen.getByTestId('auth-socials-test-id');
    const googleIconBtn = within(authSocials).getByTestId(
      /icon-btn-google-test-id/i
    );

    await userEvent.click(googleIconBtn);

    expect(mockOnClickGoogle).toHaveBeenCalledTimes(1);
    expect(mockOnClickFacebook).not.toBeCalled();
    expect(mockOnClickLinkedIn).not.toBeCalled();
  });

  it('should handle click events on LinkedIn icon - run handler once, not trigger other handlers', async () => {
    render(<AuthSocials {...props} />);

    const authSocials = screen.getByTestId('auth-socials-test-id');
    const linkedInIconBtn = within(authSocials).getByTestId(
      /icon-btn-linkedin-test-id/i
    );

    await userEvent.click(linkedInIconBtn);

    expect(mockOnClickLinkedIn).toHaveBeenCalledTimes(1);
    expect(mockOnClickFacebook).not.toBeCalled();
    expect(mockOnClickGoogle).not.toBeCalled();
  });

  it('should match snapshot', () => {
    const tree = create(<AuthSocials {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
