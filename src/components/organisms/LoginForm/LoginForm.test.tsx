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
    testId: 'login-form-test-id',
    onClickResetPassword: mockOnClickResetPassword,
    onSubmitLoginForm: mockOnSubmitLoginForm,
  };

  it('should render email and password inputs', () => {
    render(<LoginForm {...props} />);

    const emailInput = screen.getByTestId('email-input-login-form-test-id');
    const passwordInput = screen.getByTestId(
      'password-input-login-form-test-id'
    );

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("should render checkbox with 'Remember me?' label", () => {
    render(<LoginForm {...props} />);

    const checkbox = screen.getByTestId('remember-password-checkbox-test-id');
    const checkboxLabel = screen.getByTestId(
      'input-label-remember-password-checkbox-test-id'
    );

    expect(checkboxLabel).toHaveTextContent(/Remember me?/);
    expect(checkboxLabel).toHaveAttribute('for', checkbox.getAttribute('id'));
  });

  it('should render initially unchecked checkbox', () => {
    render(<LoginForm {...props} />);

    const checkbox = screen.getByTestId('remember-password-checkbox-test-id');

    expect(checkbox).not.toBeChecked();
  });

  it("should render submit button with 'Login' text", () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login-test-id');

    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toHaveTextContent('Login');
  });

  it('should submit form with non-empty input fields and checkbox unchecked - run submit handler once', async () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login-test-id');
    const emailInputField = within(
      screen.getByTestId('email-input-login-form-test-id')
    ).getByTestId('input-field-email-test-id');
    const passwordInputField = within(
      screen.getByTestId('password-input-login-form-test-id')
    ).getByTestId('input-field-password-test-id');

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

  it('should submit form with non-empty input fields and checkbox checked - run submit handler once', async () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login-test-id');
    const emailInputField = within(
      screen.getByTestId('email-input-login-form-test-id')
    ).getByTestId('input-field-email-test-id');
    const passwordInputField = within(
      screen.getByTestId('password-input-login-form-test-id')
    ).getByTestId('input-field-password-test-id');
    const checkbox = screen.getByTestId('remember-password-checkbox-test-id');

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

  it("shouldn't submit form with one or more empty input fields", async () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login-test-id');

    await userEvent.click(submitButton);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();

    const emailInputField = within(
      screen.getByTestId('email-input-login-form-test-id')
    ).getByTestId('input-field-email-test-id');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.click(submitButton);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();
  });

  it("should render reset password button with 'Forgot Password?' text", () => {
    render(<LoginForm {...props} />);

    const resetPasswordButton = screen.getByTestId(
      'btn-reset-password-test-id'
    );

    expect(resetPasswordButton).toHaveAttribute('type', 'button');
    expect(resetPasswordButton).toHaveTextContent('Forgot Password?');
  });

  it('reset password button should handle click events - run click handler once', async () => {
    render(<LoginForm {...props} />);

    const resetPasswordButton = screen.getByTestId(
      'btn-reset-password-test-id'
    );

    await userEvent.click(resetPasswordButton);

    expect(mockOnClickResetPassword).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = create(<LoginForm {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
