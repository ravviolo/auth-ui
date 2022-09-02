import * as S from './IconButton.styles';

interface Props {
  icon: string;
  type: 'button' | 'submit' | 'reset';
  color: string;
  className?: string;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  color,
  className,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <S.IconButton
      className={className}
      color={color}
      type={type}
      onClick={onClick}
    >
      {icon}
    </S.IconButton>
  );
};
