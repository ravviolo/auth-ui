import { InputField, InputLabel } from 'components/atoms';

interface Props {
  id: string;
  name: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name }, ref) => {
    return (
      <div>
        <InputLabel htmlFor={id} label="Password" />
        <InputField ref={ref} id={id} name={name} type="password" />
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
