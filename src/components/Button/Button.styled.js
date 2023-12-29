import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 17px 39px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  text-align: center;
  border-radius: 35px;
  transition: 0.3s;
  cursor: pointer;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 84.221%;

  color: ${({ theme }) => theme.colors.button.primary.color};
  border: 1.65px solid ${({ theme }) => theme.colors.button.primary.border};
  background: ${({ theme }) => theme.colors.button.primary.background};
  box-shadow: ${({ theme }) => theme.colors.button.primary.boxShadow};

  &:hover {
    color: ${({ theme }) => theme.colors.button.hover.color};
    border: 1.65px solid ${({ theme }) => theme.colors.button.hover.border};
    background: ${({ theme }) => theme.colors.button.hover.background};
    box-shadow: ${({ theme }) => theme.colors.button.hover.boxShadow};

    img {
      filter: brightness(200%) contrast(200%);
    }
  }

  /* @media ${device.laptopL} {
    font-size: 20px;
  } */
`;
