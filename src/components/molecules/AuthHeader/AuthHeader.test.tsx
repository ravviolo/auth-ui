import { render, screen, within } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { AuthHeader } from 'components/molecules';

import { Props as AuthHeaderProps } from './AuthHeader';

describe('AuthHeader', () => {
  const props: AuthHeaderProps = {
    title: 'Test Header Title',
    testId: 'auth-header-test-id',
  };

  it('should render header with heading text passed as a prop', () => {
    render(<AuthHeader {...props} />);

    const authHeader = screen.getByTestId('auth-header-test-id');

    const authHeading = within(authHeader).getByTestId('auth-heading-test-id');

    expect(authHeading).toHaveTextContent('Test Header Title');
  });
  it('should match snapshot', () => {
    const tree = create(<AuthHeader {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
