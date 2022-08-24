import React from 'react';

import * as S from './Checkbox.styles';

interface Props {
  id: string;
  name: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name }, ref) => {
    return <S.ChechboxInput ref={ref} id={id} name={name} type="checkbox" />;
  }
);

Checkbox.displayName = 'Checkbox';
