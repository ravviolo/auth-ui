import React from 'react';

import { InputField, InputLabel } from 'components/atoms';

interface Props {
  id: string;
  name: string;
}

export const EmailInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name }, ref) => {
    return (
      <div>
        <InputLabel htmlFor={id} label="Email" />
        <InputField ref={ref} id={id} name={name} type="email" />
      </div>
    );
  }
);

EmailInput.displayName = 'EmailInput';
