import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { InputLabel } from 'components/atoms';

import { Props as InputLabelProps } from './InputLabel';

describe('InputLabel', () => {
  const props: InputLabelProps = {
    htmlFor: 'test-input-label',
    label: 'Test Input',
    testId: 'input-label-test-id',
  };

  it('should display label text received via props', () => {
    render(<InputLabel {...props} />);

    const inputLabel = screen.getByTestId('input-label-test-id');

    expect(inputLabel).toHaveTextContent('Test Input');
  });

  it("should correctly assign 'for' attribute received via props", () => {
    render(<InputLabel {...props} />);

    const inputLabel = screen.getByTestId('input-label-test-id');

    expect(inputLabel).toHaveAttribute('for', 'test-input-label');
  });

  it('should match snapshot', () => {
    const tree = create(<InputLabel {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
