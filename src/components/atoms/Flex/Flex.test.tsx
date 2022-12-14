import { render, screen, within } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { Flex } from 'components/atoms';

import { Props as FlexProps } from './Flex';

describe('Flex', () => {
  const props: Omit<FlexProps, 'direction'> = {
    testId: 'flex-test-id',
    children: Array(10)
      .fill(1)
      .map((_, i) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        />
      )),
  };

  it('should render all children horizontally', () => {
    render(<Flex {...props} direction="row" />);

    const flexContainer = screen.getByTestId('flex-test-id');

    const flexChildren = within(flexContainer).getAllByRole('listitem');
    expect(flexChildren).toHaveLength(10);

    const flexContainerStyles = window.getComputedStyle(flexContainer);
    expect(flexContainerStyles.flexDirection).toBe('row');
  });

  it('should render all children vertically', () => {
    render(<Flex {...props} direction="column" />);

    const flexContainer = screen.getByTestId('flex-test-id');

    const flexChildren = within(flexContainer).getAllByRole('listitem');
    expect(flexChildren).toHaveLength(10);

    const flexContainerStyles = window.getComputedStyle(flexContainer);
    expect(flexContainerStyles.flexDirection).toBe('column');
  });

  it('should match snapshot - renders all children horizontally', () => {
    const tree = create(<Flex {...props} direction="row" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot - renders all children vertically', () => {
    const tree = create(<Flex {...props} direction="column" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
