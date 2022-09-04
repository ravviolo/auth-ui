import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { EmailInput } from 'components/molecules';

import { Props as EmailInputProps } from './EmailInput';

describe('EmailInput', () => {
  const props: EmailInputProps = {
    id: 'test-email',
    name: 'test-email',
    testId: 'test-email-input',
  };

  it('renders input with field and label', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('test-email-input');

    const emailInputLabel = within(emailInput).getByTestId('input-label-email');
    const emailInputField = within(emailInput).getByTestId('input-field-email');

    expect(emailInputLabel).toHaveTextContent('Email');
    expect(emailInputField).toHaveValue('');
  });

  it('displays entered text', async () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('test-email-input');

    const emailInputField = within(emailInput).getByTestId('input-field-email');

    await userEvent.type(emailInputField, 'Testing input');

    expect(emailInputField).toHaveValue('Testing input');
  });

  it('matches snapshot', () => {
    const tree = create(<EmailInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
