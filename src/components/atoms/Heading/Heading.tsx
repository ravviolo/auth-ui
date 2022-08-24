import * as S from './Heading.styles';

interface Props {
  title: string;
}

export const Heading = ({ title }: Props) => {
  return <S.Heading>{title}</S.Heading>;
};
