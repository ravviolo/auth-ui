import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { SignUpForm } from 'components/organisms';

import { Props as SignUpFormProps } from './SignUpForm';

describe('SignUpForm', () => {
  const mockOnSubmitSignUpForm = jest.fn<
    SignUpFormProps['onSubmitSignUpForm'],
    [string, string]
  >();
  const testEmail = 'test@test.com';
  const testPassword = 'testpassword';

  const props: SignUpFormProps = {
    testId: 'test-signup-form',
    onSubmitSignUpForm: mockOnSubmitSignUpForm,
  };

  it('should render email and password inputs', () => {
    render(<SignUpForm {...props} />);

    const emailInput = screen.getByTestId('email-input-signup-form');
    const passwordInput = screen.getByTestId('password-input-signup-form');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("should render submit button with 'Sign Up' text", () => {
    render(<SignUpForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-signup');

    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toHaveTextContent('Sign Up');
  });

  it('should submit form with non-empty input fields - run submit handler once', async () => {
    render(<SignUpForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-signup');
    const emailInputField = within(
      screen.getByTestId('email-input-signup-form')
    ).getByTestId('input-field-email');
    const passwordInputField = within(
      screen.getByTestId('password-input-signup-form')
    ).getByTestId('input-field-password');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.type(passwordInputField, testPassword);
    await userEvent.click(submitButton);

    expect(mockOnSubmitSignUpForm).toHaveBeenCalledTimes(1);
    expect(mockOnSubmitSignUpForm).toHaveBeenCalledWith(
      testEmail,
      testPassword
    );
  });

  it("shouldn't submit form with one or more empty input fields", async () => {
    render(<SignUpForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-signup');

    await userEvent.click(submitButton);

    expect(mockOnSubmitSignUpForm).not.toHaveBeenCalled();

    const emailInputField = within(
      screen.getByTestId('email-input-signup-form')
    ).getByTestId('input-field-email');

    await userEvent.type(emailInputField, testEmail);
    await userEvent.click(submitButton);

    expect(mockOnSubmitSignUpForm).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = create(<SignUpForm {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
