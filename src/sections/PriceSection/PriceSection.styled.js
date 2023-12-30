import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const MainWrapper = styled.div`
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
    gap: 90px;
    max-width: 1400px;
  }
`;
