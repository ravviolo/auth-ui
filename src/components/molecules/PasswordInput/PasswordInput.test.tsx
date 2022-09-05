import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { PasswordInput } from 'components/molecules';

import { Props as PasswordInputProps } from './PasswordInput';

describe('PasswordInput', () => {
  const props: PasswordInputProps = {
    id: 'test-password',
    name: 'test-password',
    testId: 'password-input-test-id',
  };

  it('should render input of type password', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password-test-id'
    );

    expect(passwordInputField).toHaveAttribute('type', 'password');
  });

  it('should correctly assign id, name attributes received via props', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password-test-id'
    );

    expect(passwordInputField).toHaveAttribute('id', 'test-password');
    expect(passwordInputField).toHaveAttribute('name', 'test-password');
  });

  it('should semantically connect input label with input field', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');
    const passwordInputLabel = within(passwordInput).getByTestId(
      'input-label-password-test-id'
    );
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password-test-id'
    );

    expect(passwordInputLabel).toHaveAttribute(
      'for',
      passwordInputField.getAttribute('id')
    );
  });

  it('should render initially empty input', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password-test-id'
    );

    expect(passwordInputField).toHaveValue('');
  });

  it("should display 'Password' as input label", () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');
    const passwordInputLabel = within(passwordInput).getByTestId(
      'input-label-password-test-id'
    );

    expect(passwordInputLabel).toHaveTextContent('Password');
  });

  it('should display entered text in input field', async () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');

    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password-test-id'
    );

    await userEvent.type(passwordInputField, 'Test password');

    expect(passwordInputField).toHaveValue('Test password');
  });

  it('should match snapshot', () => {
    const tree = create(<PasswordInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
