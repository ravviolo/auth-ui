import React from 'react';

import { InputField, InputLabel } from 'components/atoms';

import * as S from './EmailInput.styles';

interface Props {
  id: string;
  name: string;
}

export const EmailInput = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name }, ref) => {
    return (
      <S.InputContainer direction="column" testId="flex-email-input">
        <InputLabel htmlFor={id} label="Email" />
        <InputField ref={ref} id={id} name={name} type="email" />
      </S.InputContainer>
    );
  }
);

EmailInput.displayName = 'EmailInput';
