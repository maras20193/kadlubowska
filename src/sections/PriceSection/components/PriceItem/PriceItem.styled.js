import styled from 'styled-components';
import { device } from '../../../../styles';

export const PriceTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  width: 100%;
  max-width: 330px;
  padding: 0 10px;

  @media ${device.laptop} {
    max-width: none;
    padding: 0 60px;
  }
`;

export const CategoryWithVipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: row;
    gap: 80px;
    padding: 0 60px;
    margin-top: 30px;
    align-items: flex-start;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 13px;
  gap: 26px;
  width: 100%;
`;

export const OneCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  width: 100%;

  font-size: 16px;
  line-height: 135%; /* 21.6px */
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
`;

export const CategoryName = styled.p`
  font-weight: 600;

  @media ${device.laptop} {
    align-self: flex-start;
  }
`;
export const Bold = styled.p`
  font-weight: 600;
`;

export const MainName = styled.p`
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

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 2px solid #ededed;
  width: 100%;
  gap: 2px;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop} {
      flex-direction: row;
      gap: 4px;
      /* justify-content: space-between; */
    }
  }
`;
