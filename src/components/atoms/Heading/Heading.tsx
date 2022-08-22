interface Props {
  title: string;
}

export const Heading = ({ title }: Props) => {
  return <h1>{title}</h1>;
};
