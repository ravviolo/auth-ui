import * as S from './TextButton.styles';

interface Props {
  label: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

export const TextButton = ({
  label,
  className,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <S.TextButton className={className} type={type} onClick={onClick}>
      {label}
    </S.TextButton>
  );
};
