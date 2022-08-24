import React from 'react';

import * as S from './InputField.styles';

interface Props {
  name: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
}

export const InputField = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name, type }, ref) => {
    return <S.Field ref={ref} id={id} name={name} type={type} />;
  }
);

InputField.displayName = 'InputField';
