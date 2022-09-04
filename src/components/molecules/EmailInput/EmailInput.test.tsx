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

  it('renders input of type email', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('test-email-input');
    const emailInputField = within(emailInput).getByTestId('input-field-email');

    expect(emailInputField).toHaveAttribute('type', 'email');
  });

  it('correctly assigns id, name attributes to input field', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('test-email-input');
    const emailInputField = within(emailInput).getByTestId('input-field-email');

    expect(emailInputField).toHaveAttribute('id', 'test-email');
    expect(emailInputField).toHaveAttribute('name', 'test-email');
  });

  it('semantically connects input label with input field', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('test-email-input');
    const emailInputLabel = within(emailInput).getByTestId('input-label-email');
    const emailInputField = within(emailInput).getByTestId('input-field-email');

    expect(emailInputLabel).toHaveAttribute(
      'for',
      emailInputField.getAttribute('id')
    );
  });

  it('renders initially empty input', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('test-email-input');
    const emailInputField = within(emailInput).getByTestId('input-field-email');

    expect(emailInputField).toHaveValue('');
  });

  it("displays 'Email' as input label", () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('test-email-input');
    const emailInputLabel = within(emailInput).getByTestId('input-label-email');

    expect(emailInputLabel).toHaveTextContent('Email');
  });

  it('displays entered text in input field', async () => {
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
