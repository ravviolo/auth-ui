import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { LoginTemplate } from 'components/templates';

import { Props as LoginTemplateProps } from './LoginTemplate';

describe('LoginTemplate', () => {
  const mockOnClickFacebook = jest.fn<
    LoginTemplateProps['onClickFacebook'],
    []
  >();
  const mockOnClickGoogle = jest.fn<LoginTemplateProps['onClickGoogle'], []>();
  const mockOnClickLinkedIn = jest.fn<
    LoginTemplateProps['onClickLinkedIn'],
    []
  >();
  const mockOnSubmitLoginForm = jest.fn<
    LoginTemplateProps['onSubmitLoginForm'],
    [string, string, boolean]
  >();
  const mockOnClickResetPassword = jest.fn<
    LoginTemplateProps['onClickResetPassword'],
    []
  >();
  const mockOnClickFooterBtn = jest.fn<
    LoginTemplateProps['onClickFooterBtn'],
    []
  >();

  const testEmail = 'test@test.com';
  const testPassword = 'testpassword';

  const props: LoginTemplateProps = {
    testId: 'test-login-template',
    headerText: 'Login Header',
    footerText: 'Login Footer',
    footerBtnText: 'Login Footer Button',
    onClickFacebook: mockOnClickFacebook,
    onClickGoogle: mockOnClickGoogle,
    onClickLinkedIn: mockOnClickLinkedIn,
    onSubmitLoginForm: mockOnSubmitLoginForm,
    onClickResetPassword: mockOnClickResetPassword,
    onClickFooterBtn: mockOnClickFooterBtn,
  };

  it('renders login header with title', () => {
    render(<LoginTemplate {...props} />);

    const heading = screen.getByTestId('auth-header-login-template');

    expect(heading).toHaveTextContent('Login Header');
  });

  it('renders login form', () => {
    render(<LoginTemplate {...props} />);

    const loginForm = screen.getByTestId('login-form');

    expect(loginForm).toBeInTheDocument();
  });

  it('submits login form with non-empty input fields', async () => {
    render(<LoginTemplate {...props} />);

    const loginForm = screen.getByTestId('login-form');

    const emailInputField = within(loginForm).getByTestId('input-field-email');
    const passwordInputField = within(loginForm).getByTestId(
      'input-field-password'
    );
    const submitLoginBtn = within(loginForm).getByTestId('btn-submit-login');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, testPassword);
    await userEvent.click(submitLoginBtn);

    expect(mockOnSubmitLoginForm).toHaveBeenCalledTimes(1);
    expect(mockOnSubmitLoginForm).toHaveBeenCalledWith(
      testEmail,
      testPassword,
      false
    );
  });

  it("doesn't submit form with one or more empty input fields", async () => {
    render(<LoginTemplate {...props} />);

    const loginForm = screen.getByTestId('login-form');
    const submitLoginBtn = within(loginForm).getByTestId('btn-submit-login');

    await userEvent.click(submitLoginBtn);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();

    const emailInputField = within(loginForm).getByTestId('input-field-email');
    await userEvent.type(emailInputField, testEmail);
    await userEvent.click(submitLoginBtn);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();
  });

  it("renders a section divider with 'OR' badge", () => {
    render(<LoginTemplate {...props} />);

    const divider = screen.getByTestId('divider-login');

    expect(divider).toHaveTextContent('OR');
  });

  it('renders authenticate through socials section, displays icons for Facebook, Google, LinkedIn', () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId('auth-socials-login-template');

    const authSocialsIcons = within(authSocials).getAllByTestId(/icon-btn-/);

    expect(authSocialsIcons).toHaveLength(3);
  });

  it('handles click events on Facebook icon - runs handler once', async () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId('auth-socials-login-template');
    const facebookIcon = within(authSocials).getByTestId(/icon-btn-facebook/i);

    await userEvent.click(facebookIcon);

    expect(mockOnClickFacebook).toHaveBeenCalledTimes(1);
  });

  it('handles click events on Google icon - runs handler once', async () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId('auth-socials-login-template');
    const googleIcon = within(authSocials).getByTestId(/icon-btn-google/i);

    await userEvent.click(googleIcon);

    expect(mockOnClickGoogle).toHaveBeenCalledTimes(1);
  });

  it('handles click events on LinkedIn icon - runs handler once', async () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId('auth-socials-login-template');
    const linkedInIcon = within(authSocials).getByTestId(/icon-btn-linkedIn/i);

    await userEvent.click(linkedInIcon);

    expect(mockOnClickLinkedIn).toHaveBeenCalledTimes(1);
  });

  it('renders login footer with text and button', () => {
    render(<LoginTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-login-template');
    const footerBtn = within(footer).getByTestId('btn-footer');

    expect(footer).toHaveTextContent('Login Footer');
    expect(footerBtn).toHaveTextContent('Login Footer Button');
  });

  it('handles click events on footer button - runs handler once', async () => {
    render(<LoginTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-login-template');
    const footerBtn = within(footer).getByTestId('btn-footer');

    await userEvent.click(footerBtn);

    expect(mockOnClickFooterBtn).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const tree = create(<LoginTemplate {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
