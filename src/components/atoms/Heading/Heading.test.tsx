import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { Heading } from 'components/atoms';

import { Props as HeadingProps } from './Heading';

describe('Heading', () => {
  const props: HeadingProps = {
    testId: 'test-heading',
    title: 'Test Heading',
  };

  it('displays text received via props', () => {
    render(<Heading {...props} />);

    const heading = screen.getByTestId('test-heading');

    expect(heading).toHaveTextContent('Test Heading');
  });

  it('matches snapshot', () => {
    const tree = create(<Heading {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
