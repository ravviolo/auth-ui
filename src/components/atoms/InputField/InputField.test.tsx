import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';

import { InputField } from 'components/atoms';

import { Props as InputFieldProps } from './InputField';

describe('InputField', () => {
  const props: InputFieldProps = {
    id: 'test-input-field',
    name: 'test-input-field',
    testId: 'test-input-field',
    type: 'text',
  };

  it('renders initially as empty input', () => {
    render(<InputField {...props} />);

    const inputField = screen.getByTestId('test-input-field');

    expect(inputField).toHaveValue('');
  });

  it('correctly assigns id, name and type values received via props', () => {
    render(<InputField {...props} />);

    const inputField = screen.getByTestId('test-input-field');

    expect(inputField).toHaveAttribute('name', 'test-input-field');
    expect(inputField).toHaveAttribute('id', 'test-input-field');
    expect(inputField).toHaveAttribute('type', 'text');
  });

  it('displays entered text', async () => {
    render(<InputField {...props} />);

    const inputField = screen.getByTestId('test-input-field');

    await userEvent.type(inputField, 'Testing input field');

    expect(inputField).toHaveValue('Testing input field');
  });

  it('displays part of entered text after deleting some characters', async () => {
    render(<InputField {...props} />);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const inputField = screen.getByTestId(
      'test-input-field'
    ) as HTMLInputElement;

    await userEvent.type(inputField, 'Testing input field');
    inputField.setSelectionRange(7, 19);
    await userEvent.keyboard('{backspace}');

    expect(inputField).toHaveValue('Testing');
  });

  it('matches snapshot', () => {
    const tree = create(<InputField {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
