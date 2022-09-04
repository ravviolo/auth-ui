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

  it('renders empty input of type password with Password as label', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('test-password-input');

    const passwordInputLabel = within(passwordInput).getByTestId(
      'input-label-password'
    );
    const passwordInputField = within(passwordInput).getByTestId(
      'input-field-password'
    );

    expect(passwordInputLabel).toHaveTextContent('Password');
    expect(passwordInputField).toHaveValue('');
    expect(passwordInputField).toHaveAttribute('type', 'password');
  });

  it('displays entered text', async () => {
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
