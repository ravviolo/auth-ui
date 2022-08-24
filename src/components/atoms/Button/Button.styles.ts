import styled from 'styled-components';

import { colors } from 'theme';

export const Button = styled.button`
  width: 100%;
  padding: 0.7rem 1rem;
  background-color: ${colors.primary};
  color: ${colors.textWhite};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;
