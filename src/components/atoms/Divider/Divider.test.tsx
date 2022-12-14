import { render, screen, within } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { Divider } from 'components/atoms';

import { Props as DividerProps } from './Divider';

describe('Divider', () => {
  const props: DividerProps = {
    testId: 'divider-test-id',
  };

  it('should render correctly without badge', () => {
    render(<Divider {...props} />);

    const divider = screen.getByTestId('divider-test-id');

    expect(divider).toBeInTheDocument();

    const badgeText = within(divider).queryByText('Badge');

    expect(badgeText).not.toBeInTheDocument();
  });

  it('should render correctly with badge', () => {
    render(<Divider {...props} label="Badge" />);

    const divider = screen.getByTestId('divider-test-id');

    expect(divider).toBeInTheDocument();

    const badgeText = within(divider).getByText('Badge');

    expect(badgeText).toBeInTheDocument();
  });

  it('should match snapshot with badge', () => {
    const tree = create(<Divider {...props} label="Badge" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot without badge', () => {
    const tree = create(<Divider {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
