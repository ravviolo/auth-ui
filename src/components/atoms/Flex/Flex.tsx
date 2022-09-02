import * as S from './Flex.styles';

export interface Props {
  children: React.ReactNode;
  direction: 'column' | 'row';
  testId: string;
  className?: string;
}

export const Flex = ({ direction, testId, className, children }: Props) => {
  return (
    <S.FlexContainer
      className={className}
      data-testid={testId}
      direction={direction}
    >
      {children}
    </S.FlexContainer>
  );
};
