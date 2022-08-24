import styled from 'styled-components';

import { Flex, IconButton } from 'components/atoms';

export const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const AuthSocialButton = styled(IconButton)<{ color: string }>`
  color: ${({ color }) => color};
  border-color: ${({ color }) => color};
`;
