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
  width: 170px;
  height: 170px;
  object-fit: cover;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
