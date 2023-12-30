import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding-bottom: 40px;

  @media ${device.laptop} {
    padding-bottom: 80px;
  }
`;

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 100%;
    max-width: 1300px;
    gap: 40px;
  }
`;
export const FAQNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 20px;

  @media ${device.laptop} {
    flex-direction: row;
    gap: 0;
  }
`;

export const FaqNavItem = styled.li`
  font-size: 16px;
  line-height: 132%;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  text-transform: uppercase;
  text-align: center;

  width: 320px;

  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ededed;
  padding-bottom: 20px;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }

  &:last-child {
    border-bottom: none;
  }

  @media ${device.laptop} {
    border-bottom: none;
    padding: 17px 15px;
    border-right: 2px solid #ededed;
    width: auto;

    &:last-child {
      border-right: none;
    }
  }
  @media ${device.laptopL} {
    font-size: 20px;
    line-height: 84.221%;
  }
`;

export const FAQInfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  text-align: center;

  padding: 30px 16px;
  margin: 0 12px;

  border-radius: 35px;
  background: #f7f7f7;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1) inset;

  min-width: 300px;
  max-width: 300px;

  @media ${device.mobileM} {
    min-width: 340px;
    max-width: 340px;
  }
  @media ${device.mobileL} {
    padding: 30px 35px;
    min-width: 405px;
    max-width: 405px;
  }
  @media ${device.mobileXL} {
    min-width: 630px;
    max-width: 630px;
  }

  @media ${device.laptop} {
    min-width: 920px;
    max-width: 920px;
    padding: 48px 60px;
  }

  @media ${device.laptopM} {
    min-width: 1100px;
    max-width: 1100px;
  }

  @media ${device.laptopL} {
    min-width: 1200px;
    max-width: 1200px;
  }
`;
