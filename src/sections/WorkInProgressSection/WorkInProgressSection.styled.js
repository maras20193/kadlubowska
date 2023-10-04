import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 15px;
  min-height: 100vh;
`;

export const LogoWrapper = styled.div`
  width: 80%;
  height: 30px;
  margin: 15px 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  height: calc(100vh - 105px);
  width: 100%;
  flex-grow: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 80% 50%;

    @media ${device.laptopM} {
      object-position: 50% 25%;
    }
  }
`;
