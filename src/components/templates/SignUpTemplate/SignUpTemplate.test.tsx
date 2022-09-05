import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { SignUpTemplate } from 'components/templates';

import { Props as SignUpTemplateProps } from './SignUpTemplate';

describe('SignUpTemplate', () => {
  const mockOnClickFacebook = jest.fn<
    SignUpTemplateProps['onClickFacebook'],
    []
  >();
  const mockOnClickGoogle = jest.fn<SignUpTemplateProps['onClickGoogle'], []>();
  const mockOnClickLinkedIn = jest.fn<
    SignUpTemplateProps['onClickLinkedIn'],
    []
  >();
  const mockOnSubmitSignUpForm = jest.fn<
    SignUpTemplateProps['onSubmitSignUpForm'],
    [string, string]
  >();
  const mockOnClickFooterBtn = jest.fn<
    SignUpTemplateProps['onClickFooterBtn'],
    []
  >();

  const testEmail = 'test@test.com';
  const testPassword = 'testpassword';

  const props: SignUpTemplateProps = {
    testId: 'signup-template-test-id',
    headerText: 'SignUp Header',
    footerText: 'SignUp Footer',
    footerBtnText: 'SignUp Footer Button',
    onClickFacebook: mockOnClickFacebook,
    onClickGoogle: mockOnClickGoogle,
    onClickLinkedIn: mockOnClickLinkedIn,
    onSubmitSignUpForm: mockOnSubmitSignUpForm,
    onClickFooterBtn: mockOnClickFooterBtn,
  };

  it('should render signup header with title', () => {
    render(<SignUpTemplate {...props} />);

    const heading = screen.getByTestId('auth-header-signup-template-test-id');

    expect(heading).toHaveTextContent('SignUp Header');
  });

  it('should render signup form', () => {
    render(<SignUpTemplate {...props} />);

    const signUpForm = screen.getByTestId('signup-form-test-id');

    expect(signUpForm).toBeInTheDocument();
  });

  it('should submit signup form with non-empty input fields', async () => {
    render(<SignUpTemplate {...props} />);

    const signUpForm = screen.getByTestId('signup-form-test-id');

    const emailInputField = within(signUpForm).getByTestId(
      'input-field-email-test-id'
    );
    const passwordInputField = within(signUpForm).getByTestId(
      'input-field-password-test-id'
    );
    const submitSignUpBtn = within(signUpForm).getByTestId(
      'btn-submit-signup-test-id'
    );

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, testPassword);
    await userEvent.click(submitSignUpBtn);

    expect(mockOnSubmitSignUpForm).toHaveBeenCalledTimes(1);
    expect(mockOnSubmitSignUpForm).toHaveBeenCalledWith(
      testEmail,
      testPassword
    );
  });

  it("shouldn't submit form with one or more empty input fields", async () => {
    render(<SignUpTemplate {...props} />);

    const signUpForm = screen.getByTestId('signup-form-test-id');
    const submitSignUpBtn = within(signUpForm).getByTestId(
      'btn-submit-signup-test-id'
    );

    await userEvent.click(submitSignUpBtn);

    expect(mockOnSubmitSignUpForm).not.toHaveBeenCalled();

    const emailInputField = within(signUpForm).getByTestId(
      'input-field-email-test-id'
    );
    await userEvent.type(emailInputField, testEmail);
    await userEvent.click(submitSignUpBtn);

    expect(mockOnSubmitSignUpForm).not.toHaveBeenCalled();
  });

  it("should render a section divider with 'OR' badge", () => {
    render(<SignUpTemplate {...props} />);

    const divider = screen.getByTestId('divider-signup-test-id');

    expect(divider).toHaveTextContent('OR');
  });

  it('should render authenticate through socials section, should display icons for Facebook, Google, LinkedIn', () => {
    render(<SignUpTemplate {...props} />);

    const authSocials = screen.getByTestId(
      'auth-socials-signup-template-test-id'
    );

    const authSocialsIcons = within(authSocials).getAllByTestId(
      /icon-btn-([A-Z])\w+-test-id/i
    );

    expect(authSocialsIcons).toHaveLength(3);
  });

  it('should handle click events on Facebook icon - run handler once', async () => {
    render(<SignUpTemplate {...props} />);

    const authSocials = screen.getByTestId(
      'auth-socials-signup-template-test-id'
    );
    const facebookIcon = within(authSocials).getByTestId(
      /icon-btn-facebook-test-id/i
    );

    await userEvent.click(facebookIcon);

    expect(mockOnClickFacebook).toHaveBeenCalledTimes(1);
  });

  it('should handle click events on Google icon - run handler once', async () => {
    render(<SignUpTemplate {...props} />);

    const authSocials = screen.getByTestId(
      'auth-socials-signup-template-test-id'
    );
    const googleIcon = within(authSocials).getByTestId(
      /icon-btn-google-test-id/i
    );

    await userEvent.click(googleIcon);

    expect(mockOnClickGoogle).toHaveBeenCalledTimes(1);
  });

  it('should handle click events on LinkedIn icon - run handler once', async () => {
    render(<SignUpTemplate {...props} />);

    const authSocials = screen.getByTestId(
      'auth-socials-signup-template-test-id'
    );
    const linkedInIcon = within(authSocials).getByTestId(
      /icon-btn-linkedin-test-id/i
    );

    await userEvent.click(linkedInIcon);

    expect(mockOnClickLinkedIn).toHaveBeenCalledTimes(1);
  });

  it('should render signup footer with text and button', () => {
    render(<SignUpTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-signup-template-test-id');
    const footerBtn = within(footer).getByTestId('btn-footer-test-id');

    expect(footer).toHaveTextContent('SignUp Footer');
    expect(footerBtn).toHaveTextContent('SignUp Footer Button');
  });

  it('should handle click events on footer button - run handler once', async () => {
    render(<SignUpTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-signup-template-test-id');
    const footerBtn = within(footer).getByTestId('btn-footer-test-id');

    await userEvent.click(footerBtn);

    expect(mockOnClickFooterBtn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = create(<SignUpTemplate {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
