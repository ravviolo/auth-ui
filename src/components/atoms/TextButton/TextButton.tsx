interface Props {
  label: string;
  type: 'button' | 'submit';
  onClick?: () => void;
}

export const TextButton = ({ label, type, onClick }: Props) => {
  return (
    <button type={type === 'button' ? 'button' : 'submit'} onClick={onClick}>
      {label}
    </button>
  );
};
