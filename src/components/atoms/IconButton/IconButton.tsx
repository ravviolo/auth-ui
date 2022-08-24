import * as S from './IconButton.styles';

interface Props {
  icon: string;
  type: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

export const IconButton = ({ icon, type, className, onClick }: Props) => {
  return (
    <S.IconButton
      className={className}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      {icon}
    </S.IconButton>
  );
};
