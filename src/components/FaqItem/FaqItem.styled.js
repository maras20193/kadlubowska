import styled from 'styled-components';
import { device } from '../../styles';

export const FaqItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 100%;
  max-width: 100%;
  border-bottom: 2px solid #ededed;
  padding-bottom: 26px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    background-color: transparent;
    cursor: pointer;
    width: 100%;

    @media ${device.laptop} {
      flex-direction: row;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
    }
  }

  p {
    font-size: 16px;
    line-height: 130%; /* 20.8px */
    font-weight: ${({ isOpen }) => (isOpen ? 600 : 300)};
    text-transform: uppercase;
    width: 100%;

    @media ${device.laptop} {
      font-size: 20px;
    }

    &:hover {
      font-weight: 600;
    }
  }

  span {
    font-size: 13px;
    line-height: 170%; /* 22.1px */
    text-align: center;
    font-style: normal;
    font-weight: 400;

    @media ${device.laptop} {
      font-size: 16px;
    }
  }

  img {
    translate: 1s;
    transform: ${({ isOpen }) => (isOpen ? `rotate(-90deg)` : `rotate(90deg)`)};

    @media ${device.laptop} {
      align-self: flex-end;
    }
  }
`;