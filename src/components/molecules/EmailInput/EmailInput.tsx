import { InputField, InputLabel } from 'components/atoms';

interface Props {
  id: string;
  name: string;
}

export const EmailInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name }, ref) => {
    return (
      <div>
        <InputLabel label="Email" htmlFor={id} />
        <InputField type="email" id={id} name={name} ref={ref} />
      </div>
    );
  }
);

EmailInput.displayName = 'EmailInput';
