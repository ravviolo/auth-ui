import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { AuthSocials } from 'components/molecules';

import { Props as AuthSocialsProps } from './AuthSocials';

describe('AuthSocials', () => {
  const mockOnClickGoogle = jest.fn();
  const mockOnClickFacebook = jest.fn();
  const mockOnClickLinkedIn = jest.fn();

  const props: AuthSocialsProps = {
    testId: 'test-auth-socials',
    onClickFacebook: mockOnClickFacebook,
    onClickGoogle: mockOnClickGoogle,
    onClickLinkedIn: mockOnClickLinkedIn,
  };

  it('renders icon buttons for authenticating through socials', () => {
    render(<AuthSocials {...props} />);

    const authSocials = screen.getByTestId('test-auth-socials');

    const socialsIconBtns = within(authSocials).getAllByTestId(/icon-btn-/);

    expect(socialsIconBtns).toHaveLength(3);
  });

  it('handles click event, fires event handler once', async () => {
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

  it('matches snapshot', () => {
    const tree = create(<AuthSocials {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
