import styled from 'styled-components';

interface Props {
  color: string;
}

export const IconButton = styled.button<Props>`
  background-color: transparent;
  border: 2px solid;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  border-width: 2px;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
  color: ${({ color }) => color};
  border-color: ${({ color }) => color};
`;
