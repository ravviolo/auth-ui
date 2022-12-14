import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { InputField } from 'components/atoms';

import { Props as InputFieldProps } from './InputField';

describe('InputField', () => {
  const props: InputFieldProps = {
    id: 'test-input-field',
    name: 'test-input-field',
    testId: 'input-field-test-id',
    type: 'text',
  };

  it('should render initially as empty input', () => {
    render(<InputField {...props} />);

    const inputField = screen.getByTestId('input-field-test-id');

    expect(inputField).toHaveValue('');
  });

  it('should correctly assign id, name and type values received via props', () => {
    render(<InputField {...props} />);

    const inputField = screen.getByTestId('input-field-test-id');

    expect(inputField).toHaveAttribute('name', 'test-input-field');
    expect(inputField).toHaveAttribute('id', 'test-input-field');
    expect(inputField).toHaveAttribute('type', 'text');
  });

  it('should display entered text', async () => {
    render(<InputField {...props} />);

    const inputField = screen.getByTestId('input-field-test-id');

    await userEvent.type(inputField, 'Testing input field');

    expect(inputField).toHaveValue('Testing input field');
  });

  it('should display part of entered text after deleting some characters', async () => {
    render(<InputField {...props} />);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const inputField = screen.getByTestId(
      'input-field-test-id'
    ) as HTMLInputElement;

    await userEvent.type(inputField, 'Testing input field');
    inputField.setSelectionRange(7, 19);
    await userEvent.keyboard('{backspace}');

    expect(inputField).toHaveValue('Testing');
  });

  it('should match snapshot', () => {
    const tree = create(<InputField {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
