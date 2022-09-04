import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { InputLabel } from 'components/atoms';

import { Props as InputLabelProps } from './InputLabel';

describe('InputLabel', () => {
  const props: InputLabelProps = {
    htmlFor: 'test-input-label',
    label: 'Test Input',
    testId: 'test-input-label',
  };

  it('displays label text received via props', () => {
    render(<InputLabel {...props} />);

    const inputLabel = screen.getByTestId('test-input-label');

    expect(inputLabel).toHaveTextContent('Test Input');
  });

  it("correctly assigns 'for' attribute received via props", () => {
    render(<InputLabel {...props} />);

    const inputLabel = screen.getByTestId('test-input-label');

    expect(inputLabel).toHaveAttribute('for', 'test-input-label');
  });

  it('matches snapshot', () => {
    const tree = create(<InputLabel {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
