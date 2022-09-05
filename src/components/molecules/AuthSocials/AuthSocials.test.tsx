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
    testId: 'test-auth-socials',
    onClickFacebook: mockOnClickFacebook,
    onClickGoogle: mockOnClickGoogle,
    onClickLinkedIn: mockOnClickLinkedIn,
  };

  it('should render icon buttons for authenticating through socials', () => {
    render(<AuthSocials {...props} />);

    const authSocials = screen.getByTestId('test-auth-socials');

    const socialsIconBtns = within(authSocials).getAllByTestId(/icon-btn-/);

    expect(socialsIconBtns).toHaveLength(3);
  });

  it('should handle click event, run event handler once', async () => {
    render(<AuthSocials {...props} />);

    const authSocials = screen.getByTestId('test-auth-socials');

    const facebookIconBtn =
      within(authSocials).getByTestId(/icon-btn-facebook/i);
    const googleIconBtn = within(authSocials).getByTestId(/icon-btn-google/i);
    const linkedInIconBtn =
      within(authSocials).getByTestId(/icon-btn-linkedin/i);

    await userEvent.click(facebookIconBtn);
    expect(mockOnClickFacebook).toHaveBeenCalledTimes(1);

    await userEvent.click(googleIconBtn);
    expect(mockOnClickGoogle).toHaveBeenCalledTimes(1);

    await userEvent.click(linkedInIconBtn);
    expect(mockOnClickLinkedIn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = create(<AuthSocials {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
