import * as S from './IconButton.styles';

interface Props {
  icon: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  className,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <S.IconButton className={className} type={type} onClick={onClick}>
      {icon}
    </S.IconButton>
  );
};
