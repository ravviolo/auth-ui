import React from 'react';

import { InputField, InputLabel } from 'components/atoms';

import * as S from './EmailInput.styles';

export interface Props {
  id: string;
  name: string;
  testId: string;
}

export const EmailInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name, testId }, ref) => {
    return (
      <S.InputContainer direction="column" testId={testId}>
        <InputLabel htmlFor={id} label="Email" testId="input-label-email" />
        <InputField
          ref={ref}
          id={id}
          name={name}
          testId="input-field-email"
          type="email"
        />
      </S.InputContainer>
    );
  }
);

EmailInput.displayName = 'EmailInput';
