import React from 'react';

import * as S from './InputField.styles';

export interface Props {
  name: string;
  id: string;
  testId: string;
  type: React.HTMLInputTypeAttribute;
}

export const InputField = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name, type, testId }, ref) => {
    return (
      <S.Field ref={ref} data-testid={testId} id={id} name={name} type={type} />
    );
  }
);

InputField.displayName = 'InputField';
