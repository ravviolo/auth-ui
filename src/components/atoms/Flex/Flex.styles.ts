import styled from 'styled-components';

interface Props {
  direction: 'column' | 'row';
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;
