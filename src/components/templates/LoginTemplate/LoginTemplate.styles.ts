import styled from 'styled-components';

import { Flex } from 'components/atoms';

export const Container = styled.main`
  width: 100%;
  height: 60vh;
  padding: 3em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.3);
`;

export const TemplateFlex = styled(Flex)`
  gap: 2em;
`;
