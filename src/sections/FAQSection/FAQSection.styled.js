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
  font-size: 14px;
  line-height: 132%;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  text-transform: uppercase;
  text-align: center;

  width: 300px;

  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ededed;
  padding-bottom: 20px;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }

  &:last-child {
    border-bottom: none;
  }

  @media ${device.mobileM} {
    width: 320px;
  }

  @media ${device.laptop} {
    font-size: 16px;
    line-height: 84.221%;
    border-bottom: none;
    padding: 17px 15px;
    border-right: 2px solid #ededed;
    width: auto;

    &:last-child {
      border-right: none;
    }
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

  border-radius: 35px;
  background: #f7f7f7;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1) inset;

  min-width: 280px;
  max-width: 280px;
  margin: 0 16px;

  @media ${device.mobileM} {
    min-width: 320px;
    max-width: 320px;
  }
  @media ${device.mobileL} {
    padding: 30px 35px;
    min-width: 385px;
    max-width: 385px;
  }
  @media ${device.mobileXL} {
    min-width: 610px;
    max-width: 610px;
  }

  @media ${device.laptop} {
    min-width: 900px;
    max-width: 900px;
    padding: 48px 60px;
  }
`;
