import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  width: 100%;

  margin-bottom: 52px;

  @media ${device.laptop} {
    margin-bottom: 100px;
  }
  @media ${device.laptopL} {
    flex-direction: row;
    gap: 90px;
  }
`;

export const ServiceTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  width: 100%;
  max-width: 330px;
  padding: 0 10px;

  @media ${device.laptop} {
    max-width: 640px;

    &:last-child {
      max-width: 450px;
    }
  }

  @media ${device.laptopL} {
    max-width: 720px;

    &:last-child {
      max-width: 500px;
    }
  }
`;

export const SmallServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13px;
  gap: 26px;

  @media ${device.laptop} {
    flex-direction: row;
    margin-top: 35px;
    gap: 40px;
  }
`;

export const OneService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  p {
    font-size: 20px;
    line-height: 84.221%;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
export const MainName = styled.div`
  font-size: 15px;
  line-height: 84.221%;
  font-weight: 300;
  letter-spacing: 4.35px;
  text-transform: uppercase;

  margin-bottom: 26px;

  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 35px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transform: scale(1.5) translateX(30px);

    @media ${device.tablet} {
      transform: scale(1) translateX(0);
    }
  }

  @media ${device.laptop} {
    height: 450px;
  }
`;

export const ModelInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: 286px;
  gap: 28px;

  color: ${({ theme }) => theme.colors.background.secondary};

  @media ${device.laptop} {
    width: 820px;
    gap: 32px;
  }
`;
export const ModelTitle = styled.p`
  font-size: 52px;
  font-style: normal;
  font-weight: 400;
  line-height: 88%;
  text-transform: uppercase;
  text-align: center;

  @media ${device.laptop} {
    font-size: 60px;
    line-height: 80%; /* 51.2px */
  }
`;
export const ModelInfo = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 129.221%;
  text-transform: uppercase;
  text-align: center;

  @media ${device.laptop} {
    font-size: 24px;
    line-height: 130%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 820px;
    gap: 32px;
  }
`;
