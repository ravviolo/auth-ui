interface Props {
  label?: string;
}

export const Divider = ({ label }: Props) => {
  return <div>{label && <p>{label}</p>}</div>;
};
