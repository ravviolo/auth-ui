import * as S from './Flex.styles';

interface Props {
  children: React.ReactNode;
  direction: 'column' | 'row';
  className?: string;
}

export const Flex = ({ direction, className, children }: Props) => {
  return (
    <S.FlexContainer className={className} direction={direction}>
      {children}
    </S.FlexContainer>
  );
};
