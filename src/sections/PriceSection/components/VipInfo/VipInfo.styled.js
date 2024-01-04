import styled from 'styled-components';
import { device } from '../../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;

  width: 100%;
  padding: 23px 18px;

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 21.6px */

  /* height: 870px; */
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

export const Uppercase = styled.p`
  text-transform: uppercase;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding-bottom: 17px;
  border-bottom: 2px solid #ededed;

  &:last-child {
    padding-bottom: none;
    border-bottom: none;
  }

  span {
    font-weight: 600;
  }

  @media ${device.mobileXL} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 70%;
  }
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Title = styled(Uppercase)`
  font-weight: 600;
`;

export const LastInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
