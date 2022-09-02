import React from 'react';

import { InputField, InputLabel } from 'components/atoms';

import * as S from './PasswordInput.styles';

interface Props {
  id: string;
  name: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name }, ref) => {
    return (
      <S.InputContainer direction="column" testId="flex-password-input">
        <InputLabel htmlFor={id} label="Password" />
        <InputField
          ref={ref}
          id={id}
          name={name}
          testId="input-field-password"
          type="password"
        />
      </S.InputContainer>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
