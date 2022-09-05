import React from 'react';

import { InputField, InputLabel } from 'components/atoms';

import * as S from './PasswordInput.styles';

export interface Props {
  id: string;
  name: string;
  testId: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name, testId }, ref) => {
    return (
      <S.InputContainer direction="column" testId={testId}>
        <InputLabel
          htmlFor={id}
          label="Password"
          testId="input-label-password-test-id"
        />
        <InputField
          ref={ref}
          id={id}
          name={name}
          testId="input-field-password-test-id"
          type="password"
        />
      </S.InputContainer>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
