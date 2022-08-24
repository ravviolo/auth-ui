import styled from 'styled-components';

import { colors } from 'theme';

export const CheckboxInput = styled.input`
  &[type='checkbox'] {
    accent-color: ${colors.primary};
  }
`;
