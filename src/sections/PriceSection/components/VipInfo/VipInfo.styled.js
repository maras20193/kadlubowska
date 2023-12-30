import styled from 'styled-components';
import { device } from '../../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 23px 18px;

  height: 506px;
  border-radius: 35px;
  background: #f7f7f7;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1) inset;

  margin-top: 50px;

  @media ${device.mobileXL} {
    /* width: 120%; */
  }

  @media ${device.laptop} {
    margin-bottom: auto;
    margin-top: auto;
  }
`;
