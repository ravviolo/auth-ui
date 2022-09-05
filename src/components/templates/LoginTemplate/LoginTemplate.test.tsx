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
    testId: 'login-template-test-id',
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

  it('should render login header with title', () => {
    render(<LoginTemplate {...props} />);

    const heading = screen.getByTestId('auth-header-login-template-test-id');

    expect(heading).toHaveTextContent('Login Header');
  });

  it('should render login form', () => {
    render(<LoginTemplate {...props} />);

    const loginForm = screen.getByTestId('login-form-test-id');

    expect(loginForm).toBeInTheDocument();
  });

  it('should submit login form with non-empty input fields', async () => {
    render(<LoginTemplate {...props} />);

    const loginForm = screen.getByTestId('login-form-test-id');

    const emailInputField = within(loginForm).getByTestId(
      'input-field-email-test-id'
    );
    const passwordInputField = within(loginForm).getByTestId(
      'input-field-password-test-id'
    );
    const submitLoginBtn = within(loginForm).getByTestId(
      'btn-submit-login-test-id'
    );

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

  it("shouldn't submit form with one or more empty input fields", async () => {
    render(<LoginTemplate {...props} />);

    const loginForm = screen.getByTestId('login-form-test-id');
    const submitLoginBtn = within(loginForm).getByTestId(
      'btn-submit-login-test-id'
    );

    await userEvent.click(submitLoginBtn);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();

    const emailInputField = within(loginForm).getByTestId(
      'input-field-email-test-id'
    );
    await userEvent.type(emailInputField, testEmail);
    await userEvent.click(submitLoginBtn);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();
  });

  it("should render a section divider with 'OR' badge", () => {
    render(<LoginTemplate {...props} />);

    const divider = screen.getByTestId('divider-login-test-id');

    expect(divider).toHaveTextContent('OR');
  });

  it('should render authenticate through socials section, should display icons for Facebook, Google, LinkedIn', () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId(
      'auth-socials-login-template-test-id'
    );

    const authSocialsIcons = within(authSocials).getAllByTestId(
      /icon-btn-([A-Z])\w+-test-id/i
    );

    expect(authSocialsIcons).toHaveLength(3);
  });

  it('should handle click events on Facebook icon - run handler once', async () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId(
      'auth-socials-login-template-test-id'
    );
    const facebookIcon = within(authSocials).getByTestId(
      /icon-btn-facebook-test-id/i
    );

    await userEvent.click(facebookIcon);

    expect(mockOnClickFacebook).toHaveBeenCalledTimes(1);
  });

  it('should handle click events on Google icon - run handler once', async () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId(
      'auth-socials-login-template-test-id'
    );
    const googleIcon = within(authSocials).getByTestId(
      /icon-btn-google-test-id/i
    );

    await userEvent.click(googleIcon);

    expect(mockOnClickGoogle).toHaveBeenCalledTimes(1);
  });

  it('should handle click events on LinkedIn icon - run handler once', async () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId(
      'auth-socials-login-template-test-id'
    );
    const linkedInIcon = within(authSocials).getByTestId(
      /icon-btn-linkedin-test-id/i
    );

    await userEvent.click(linkedInIcon);

    expect(mockOnClickLinkedIn).toHaveBeenCalledTimes(1);
  });

  it('should render login footer with text and button', () => {
    render(<LoginTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-login-template-test-id');
    const footerBtn = within(footer).getByTestId('btn-footer-test-id');

    expect(footer).toHaveTextContent('Login Footer');
    expect(footerBtn).toHaveTextContent('Login Footer Button');
  });

  it('should handle click events on footer button - run handler once', async () => {
    render(<LoginTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-login-template-test-id');
    const footerBtn = within(footer).getByTestId('btn-footer-test-id');

    await userEvent.click(footerBtn);

    expect(mockOnClickFooterBtn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = create(<LoginTemplate {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
