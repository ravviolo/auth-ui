import styled from 'styled-components';

import { Flex } from 'components/atoms';

export const Container = styled.main`
  height: 560px;
  padding: 3em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1800px) {
    width: 20vw;
  }
  @media screen and (max-width: 1800px) {
    width: 20vw;
  }
  @media screen and (max-width: 1600px) {
    width: 25vw;
  }
  @media screen and (max-width: 1100px) {
    width: 40vw;
  }
  @media screen and (max-width: 700px) {
    width: 50vw;
  }
  @media screen and (max-width: 570px) {
    width: 70vw;
  }
  @media screen and (max-width: 430px) {
    width: 80vw;
  }
`;

export const TemplateFlex = styled(Flex)`
  gap: 2em;
`;
