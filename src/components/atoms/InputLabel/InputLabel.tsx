interface Props {
  label: string;
  htmlFor: string;
}

export const InputLabel = ({ htmlFor, label }: Props) => {
  return <label htmlFor={htmlFor}>{label}</label>;
};
