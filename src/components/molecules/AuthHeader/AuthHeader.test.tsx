import { render, screen, within } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { AuthHeader } from 'components/molecules';

import { Props as AuthHeaderProps } from './AuthHeader';

describe('AuthHeader', () => {
  const props: AuthHeaderProps = {
    title: 'Test Header Title',
    testId: 'test-auth-header',
  };

  it('renders header with heading text passed as a prop', () => {
    render(<AuthHeader {...props} />);

    const authHeader = screen.getByTestId('test-auth-header');

    const authHeading = within(authHeader).getByTestId('auth-heading');

    expect(authHeading).toHaveTextContent('Test Header Title');
  });
  it('matches snapshot', () => {
    const tree = create(<AuthHeader {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
