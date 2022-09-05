import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { EmailInput } from 'components/molecules';

import { Props as EmailInputProps } from './EmailInput';

describe('EmailInput', () => {
  const props: EmailInputProps = {
    id: 'test-email',
    name: 'test-email',
    testId: 'email-input-test-id',
  };

  it('should render input of type email', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputField = within(emailInput).getByTestId(
      'input-field-email-test-id'
    );

    expect(emailInputField).toHaveAttribute('type', 'email');
  });

  it('should correctly assign id, name attributes to input field', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputField = within(emailInput).getByTestId(
      'input-field-email-test-id'
    );

    expect(emailInputField).toHaveAttribute('id', 'test-email');
    expect(emailInputField).toHaveAttribute('name', 'test-email');
  });

  it('should semantically connect input label with input field', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputLabel = within(emailInput).getByTestId(
      'input-label-email-test-id'
    );
    const emailInputField = within(emailInput).getByTestId(
      'input-field-email-test-id'
    );

    expect(emailInputLabel).toHaveAttribute(
      'for',
      emailInputField.getAttribute('id')
    );
  });

  it('should render initially empty input', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputField = within(emailInput).getByTestId(
      'input-field-email-test-id'
    );

    expect(emailInputField).toHaveValue('');
  });

  it("should display 'Email' as input label", () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputLabel = within(emailInput).getByTestId(
      'input-label-email-test-id'
    );

    expect(emailInputLabel).toHaveTextContent('Email');
  });

  it('should display entered text in input field', async () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');

    const emailInputField = within(emailInput).getByTestId(
      'input-field-email-test-id'
    );

    await userEvent.type(emailInputField, 'Testing input');

    expect(emailInputField).toHaveValue('Testing input');
  });

  it('should match snapshot', () => {
    const tree = create(<EmailInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
