import { Heading } from 'components/atoms';

interface Props {
  title: string;
}

export const AuthHeader = ({ title }: Props) => {
  return (
    <header>
      <Heading title={title} testId="auth-heading" />
    </header>
  );
};
