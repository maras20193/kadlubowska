import styled from 'styled-components';
import { device } from '../../styles';

export const OutlineBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 39px;
  text-transform: uppercase;

  font-size: ${({ isSmall }) => (isSmall ? '12px' : '20px')};
  font-style: normal;
  font-weight: 400;
  line-height: 84.221%;

  @media ${device.laptopL} {
    font-size: ${({ isSmall }) => (isSmall ? '16px' : '22px')};
  }

  color: ${({ theme, lighter }) =>
    !lighter ? theme.colors.text.primary : theme.colors.border.secondary};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, lighter }) =>
    !lighter ? theme.colors.text.primary : theme.colors.border.secondary};

  position: relative;

  background-color: ${({ theme }) => theme.colors.background.primary};

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translate(0, -50%);
  }

  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translate(0, -50%);
  }
`;
