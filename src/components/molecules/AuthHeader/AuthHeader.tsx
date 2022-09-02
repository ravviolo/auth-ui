import { Heading } from 'components/atoms';

interface Props {
  title: string;
}

export const AuthHeader = ({ title }: Props) => {
  return (
    <header>
      <Heading testId="auth-heading" title={title} />
    </header>
  );
};
