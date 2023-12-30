import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 95px;
  flex-wrap: wrap;
  max-width: 1200px;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    column-gap: 35px;
    row-gap: 95px;
  }

  @media ${device.laptopL} {
    flex-direction: row;
    max-width: 1400px;
    column-gap: 75px;
    row-gap: 115px;
  }
`;

export const Course = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 330px;
  padding: 0 15px;
  position: relative;

  @media ${device.laptopL} {
    gap: 19px;
    max-width: 375px;
  }
`;

export const LevelText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 130%;
  font-weight: 300;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-align: center;
  height: 32px;

  @media ${device.laptopL} {
    font-size: 15px;
    height: 39px;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  border-radius: 35px;

  background-color: ${({ theme }) => theme.colors.box.background};
  box-shadow: ${({ theme }) => theme.colors.box.boxShadow};

  height: 294px;
  font-size: 13px;
  line-height: 170%;
  font-weight: 400;
  text-align: center;
  padding: 0 24px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -20px;
`;
