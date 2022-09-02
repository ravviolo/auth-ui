import * as S from './TextButton.styles';

export interface Props {
  label: string;
  type: 'button' | 'submit' | 'reset';
  testId: string;
  className?: string;
  onClick?: () => void;
}

export const TextButton = ({
  label,
  testId,
  className,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <S.TextButton
      className={className}
      data-testid={testId}
      type={type}
      onClick={onClick}
    >
      {label}
    </S.TextButton>
  );
};
