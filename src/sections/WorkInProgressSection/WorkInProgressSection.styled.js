import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 15px;
  min-height: 100vh;
`;

export const LogoWrapper = styled.div`
  width: 80%;
  height: 30px;
  margin: 15px 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapper = styled(motion.div)`
  height: calc(100vh - 105px);
  width: 100%;
  flex-grow: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 80% 50%;

    @media ${device.laptopM} {
      object-position: 50% 25%;
    }
  }
`;

export const Header = styled(motion.h1)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  font-size: 34px;
  line-height: 34px;
  font-family: 'Adam';
  font-weight: 400;
  text-transform: uppercase;
  max-width: 193px;
  text-align: center;

  @media ${device.tablet} {
    max-width: none;
    font-size: 42px;
    line-height: 42px;
  }

  span {
    font-weight: 500;
  }

  &::before {
    content: '';
    display: block;
    width: calc(100% + 34px);
    height: 34px;
    position: relative;
    top: 80px;
    left: -17px;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;

    @media ${device.tablet} {
      width: calc(100% + 38px);
      top: 56px;
      left: -19px;
      height: 26px;
    }
  }

  &::after {
    content: '';
    display: block;
    width: calc(100% + 34px);
    height: 34px;
    position: relative;
    top: -86px;
    left: -17px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;

    @media ${device.tablet} {
      width: calc(100% + 38px);
      top: -62px;
      left: -19px;
      height: 26px;
    }
  }
`;
