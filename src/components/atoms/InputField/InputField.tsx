interface Props {
  name: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
}

export const InputField = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name, type }, ref) => {
    return <input type={type} id={id} ref={ref} />;
  }
);

InputField.displayName = 'InputField';
