import { Heading } from 'components/atoms';

export interface Props {
  title: string;
  testId: string;
}

export const AuthHeader = ({ title, testId }: Props) => {
  return (
    <header data-testid={testId}>
      <Heading testId="auth-heading" title={title} />
    </header>
  );
};
