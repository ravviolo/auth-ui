interface Props {
  onSubmit: (
    email: string,
    password: string,
    isPasswordRemembered: boolean
  ) => void;
}

export const LoginForm = ({ onSubmit }: Props) => {
  return <div>LoginForm</div>;
};
