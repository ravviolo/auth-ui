import styled from 'styled-components';

import { Flex, TextButton } from 'components/atoms';

export const Footer = styled.footer`
  font-size: 0.8rem;
`;

export const FooterButton = styled(TextButton)`
  text-decoration: underline;
  text-transform: uppercase;
  font-size: inherit;
`;

export const FooterFlex = styled(Flex)`
  gap: 4px;
  justify-content: center;
  align-items: center;
`;
