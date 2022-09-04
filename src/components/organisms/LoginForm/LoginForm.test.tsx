import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { LoginForm } from 'components/organisms';

import { Props as LoginFormProps } from './LoginForm';

describe('LoginForm', () => {
  const mockOnSubmitLoginForm = jest.fn<
    LoginFormProps['onSubmitLoginForm'],
    [string, string, boolean]
  >();
  const mockOnClickResetPassword = jest.fn<
    LoginFormProps['onClickResetPassword'],
    []
  >();
  const testEmail = 'test@test.com';
  const testPassword = 'testpassword';

  const props: LoginFormProps = {
    testId: 'test-login-form',
    onClickResetPassword: mockOnClickResetPassword,
    onSubmitLoginForm: mockOnSubmitLoginForm,
  };

  it('renders email and password inputs', () => {
    render(<LoginForm {...props} />);

    const emailInput = screen.getByTestId('email-input-login-form');
    const passwordInput = screen.getByTestId('password-input-login-form');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders checkbox with 'Remember me?' label", () => {
    render(<LoginForm {...props} />);

    const checkbox = screen.getByTestId('remember-password-checkbox');
    const checkboxLabel = screen.getByTestId(
      'input-label-remember-password-checkbox'
    );

    expect(checkboxLabel).toHaveTextContent(/Remember me?/);
    expect(checkboxLabel).toHaveAttribute('for', checkbox.getAttribute('id'));
  });

  it('renders initially unchecked checkbox', () => {
    render(<LoginForm {...props} />);

    const checkbox = screen.getByTestId('remember-password-checkbox');

    expect(checkbox).not.toBeChecked();
  });

  it("renders submit button with 'Login' text", () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login');

    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toHaveTextContent('Login');
  });

  it('submits form with non-empty input fields and checkbox unchecked - runs submit handler once', async () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login');
    const emailInputField = within(
      screen.getByTestId('email-input-login-form')
    ).getByTestId('input-field-email');
    const passwordInputField = within(
      screen.getByTestId('password-input-login-form')
    ).getByTestId('input-field-password');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, testPassword);
    await userEvent.click(submitButton);

    expect(mockOnSubmitLoginForm).toHaveBeenCalledTimes(1);
    expect(mockOnSubmitLoginForm).toHaveBeenCalledWith(
      testEmail,
      testPassword,
      false
    );
  });

  it('submits form with non-empty input fields and checkbox checked - runs submit handler once', async () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login');
    const emailInputField = within(
      screen.getByTestId('email-input-login-form')
    ).getByTestId('input-field-email');
    const passwordInputField = within(
      screen.getByTestId('password-input-login-form')
    ).getByTestId('input-field-password');
    const checkbox = screen.getByTestId('remember-password-checkbox');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, testPassword);
    await userEvent.click(checkbox);
    await userEvent.click(submitButton);

    expect(mockOnSubmitLoginForm).toHaveBeenCalledTimes(1);
    expect(mockOnSubmitLoginForm).toHaveBeenCalledWith(
      testEmail,
      testPassword,
      true
    );
  });

  it("doesn't submit form with one or more empty input fields", async () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login');

    await userEvent.click(submitButton);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();

    const emailInputField = within(
      screen.getByTestId('email-input-login-form')
    ).getByTestId('input-field-email');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.click(submitButton);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();
  });

  it("renders reset password button with 'Forgot Password?' text", () => {
    render(<LoginForm {...props} />);

    const resetPasswordButton = screen.getByTestId('btn-reset-password');

    expect(resetPasswordButton).toHaveAttribute('type', 'button');
    expect(resetPasswordButton).toHaveTextContent('Forgot Password?');
  });

  it('reset password button handles click events - runs click handler once', async () => {
    render(<LoginForm {...props} />);

    const resetPasswordButton = screen.getByTestId('btn-reset-password');

    await userEvent.click(resetPasswordButton);

    expect(mockOnClickResetPassword).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const tree = create(<LoginForm {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
