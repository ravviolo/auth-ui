import React from 'react';

interface Props {
  id: string;
  name: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name }, ref) => {
    return <input ref={ref} id={id} name={name} type="checkbox" />;
  }
);

Checkbox.displayName = 'Checkbox';
