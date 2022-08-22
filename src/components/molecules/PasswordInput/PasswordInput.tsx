import { InputField, InputLabel } from 'components/atoms';

interface Props {
  id: string;
  name: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name }, ref) => {
    return (
      <div>
        <InputLabel label="Password" htmlFor={id} />
        <InputField id={id} name={name} type="password" ref={ref} />
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
