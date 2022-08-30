import styled from 'styled-components';

import { colors } from 'theme';

export const Container = styled.div`
  position: relative;
  height: 10px;
`;
export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 1px;
  background-color: ${colors.textLight};
`;

export const Badge = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: ${colors.textLight};
  padding: 4px;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid ${colors.textLight};
  font-family: 'Roboto', sans-serif;
`;
