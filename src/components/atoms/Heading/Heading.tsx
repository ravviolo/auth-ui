import * as S from './Heading.styles';

export interface Props {
  title: string;
  testId: string;
}

export const Heading = ({ title, testId }: Props) => {
  return <S.Heading data-testid={testId}>{title}</S.Heading>;
};
