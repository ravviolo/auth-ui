import styled from 'styled-components';

import { Flex, TextButton } from 'components/atoms';

export const Footer = styled.footer`
  font-size: 0.9rem;
`;

export const FooterBtn = styled(TextButton)`
  text-transform: uppercase;
  text-decoration: underline;
`;

export const FooterFlex = styled(Flex)`
  gap: 4px;
  justify-content: center;
  align-items: center;
`;
