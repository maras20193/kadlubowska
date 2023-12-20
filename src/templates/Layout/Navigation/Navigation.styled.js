import styled from 'styled-components';
import { device } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 51px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media ${device.laptop} {
    height: 86px;
  }
`;

export const LogoWrapper = styled.div`
  width: 220px;
  height: 11px;

  @media ${device.mobileM} {
    width: 240px;
  }

  @media ${device.laptop} {
    width: 260px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Hamburger = styled.div`
  width: 13px;
  height: 10px;

  position: absolute;
  right: 20px;
  top: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;
