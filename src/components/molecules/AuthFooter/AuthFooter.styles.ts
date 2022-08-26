import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Flex } from 'components/atoms';

export const Footer = styled.footer`
  font-size: 0.9rem;
`;

export const FooterLink = styled(Link)`
  text-transform: uppercase;
`;

export const FooterFlex = styled(Flex)`
  gap: 4px;
  justify-content: center;
  align-items: center;
`;
