import * as S from './IconButton.styles';

export interface Props {
  icon: string;
  type: 'button' | 'submit' | 'reset';
  color: string;
  testId: string;
  className?: string;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  color,
  testId,
  className,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <S.IconButton
      className={className}
      color={color}
      data-testid={testId}
      type={type}
      onClick={onClick}
    >
      {icon}
    </S.IconButton>
  );
};
