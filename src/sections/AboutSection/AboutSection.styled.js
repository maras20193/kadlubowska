import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    gap: 80px;
    align-items: flex-start;
  }
  @media ${device.laptopL} {
    gap: 120px;
  }
`;

export const NamesWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 44px;

  width: 280px;

  gap: 16px;

  @media ${device.laptop} {
    width: 500px;
    gap: 20px;
  }

  .active {
    font-weight: 500;
  }
`;

export const Name = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  line-height: 84.221%;
  font-weight: 300;
  text-transform: uppercase;
  width: 100%;

  padding-bottom: 8px;
  padding-left: 18px;
  padding-right: 18px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.border.primary};
  cursor: pointer;

  @media ${device.laptop} {
    font-size: 20px;
    width: 85%;
  }
`;

export const ImageWrapper = styled.div`
  height: 433px;
  width: 290px;
  object-fit: cover;
  border-radius: 35px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 35px;
  }

  @media ${device.mobileXL} {
    width: 330px;
    height: 500px;
  }

  @media ${device.laptop} {
    margin-top: 25px;
    height: 600px;
    width: 400px;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  line-height: 170%;
  font-weight: 400;
  text-align: center;
  max-width: 360px;

  margin-top: 40px;
  padding: 0 16px;

  @media ${device.mobileXL} {
    font-size: 14px;
    max-width: 400px;
  }

  @media ${device.laptop} {
    text-align: start;
    padding: 0;
    max-width: none;
    font-size: 14px;
  }
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${device.laptop} {
    width: 22px;
    height: 22px;
  }
`;
