import styled from 'styled-components';

import { colors } from 'theme';

export const Field = styled.input`
  width: 100%;
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid ${colors.textLight};
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${colors.text};
  }
  &:focus {
    border-color: ${colors.text};
    outline: none;
  }
`;
