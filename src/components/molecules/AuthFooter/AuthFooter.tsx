import { TextButton } from 'components/atoms';

interface Props {
  onClick: () => void;
  text: string;
  buttonLabel: string;
}

export const AuthFooter = ({ onClick, buttonLabel, text }: Props) => {
  return (
    <footer>
      <p>{text}</p>
      <TextButton label={buttonLabel} type="button" onClick={onClick} />
    </footer>
  );
};
