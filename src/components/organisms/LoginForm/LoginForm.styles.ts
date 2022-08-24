import styled from 'styled-components';

import { Flex, TextButton } from 'components/atoms';
import { colors } from 'theme';

export const Container = styled(Flex)`
  gap: 1em;
`;

export const PasswordControl = styled(Flex)`
  gap: 0.8em;
`;

export const CheckboxContainer = styled(Flex)`
  gap: 0.8em;
  align-items: center;

  & > input {
    height: 1rem;
    width: 1rem;
  }
`;

export const ResetPasswordButton = styled(TextButton)`
  color: ${colors.textLight};
  margin-left: auto;
  transform: translateY(-40%);
`;
