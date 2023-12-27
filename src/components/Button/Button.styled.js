import styled from 'styled-components';
import { device } from '../../styles';

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 39px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  text-align: center;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 84.221%;

  @media ${device.laptopL} {
    font-size: 20px;
  }

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;
