import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { PasswordInput } from 'components/molecules';

import { Props as PasswordInputProps } from './PasswordInput';

describe('PasswordInput', () => {
  const props: PasswordInputProps = {
    id: 'test-password',
    name: 'test-password',
    testId: 'test-password-input',
  };

  it('renders input of type password', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('test-password-input');
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password'
    );

    expect(passwordInputField).toHaveAttribute('type', 'password');
  });

  it('correctly assigns id, name attributes received via props', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('test-password-input');
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password'
    );

    expect(passwordInputField).toHaveAttribute('id', 'test-password');
    expect(passwordInputField).toHaveAttribute('name', 'test-password');
  });

  it('semantically connects input label with input field', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('test-password-input');
    const passwordInputLabel = within(passwordInput).getByTestId(
      'input-label-password'
    );
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password'
    );

    expect(passwordInputLabel).toHaveAttribute(
      'for',
      passwordInputField.getAttribute('id')
    );
  });

  it('renders initially empty input', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('test-password-input');
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password'
    );

    expect(passwordInputField).toHaveValue('');
  });

  it("displays 'Password' as input label", () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('test-password-input');
    const passwordInputLabel = within(passwordInput).getByTestId(
      'input-label-password'
    );

    expect(passwordInputLabel).toHaveTextContent('Password');
  });

  it('displays entered text in input field', async () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('test-password-input');

    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password'
    );

    await userEvent.type(passwordInputField, 'Test password');

    expect(passwordInputField).toHaveValue('Test password');
  });

  it('matches snapshot', () => {
    const tree = create(<PasswordInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
