import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  margin: 53px 0;

  @media ${device.laptop} {
    margin: 85px 0;
  }
`;
