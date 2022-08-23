interface Props {
  icon: string;
  type: 'button' | 'submit';
  onClick?: () => void;
}

export const IconButton = ({ icon, type, onClick }: Props) => {
  return (
    <button type={type === 'button' ? 'button' : 'submit'} onClick={onClick}>
      {icon}
    </button>
  );
};
