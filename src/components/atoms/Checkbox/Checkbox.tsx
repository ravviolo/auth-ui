import React from 'react';

import * as S from './Checkbox.styles';

export interface Props {
  id: string;
  name: string;
  testId: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ id, name, testId }, ref) => {
    return (
      <S.CheckboxInput
        ref={ref}
        data-testid={testId}
        id={id}
        name={name}
        type="checkbox"
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';
