import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding: 63px 10px 10px 10px;

  @media ${device.laptop} {
    padding: 98px 0 10px 0;
  }

  @media ${device.laptopL} {
    padding: 106px 0 16px 0;
  }
`;

export const ImageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 75% -10px;
    transform: scale(1.3);

    @media ${device.tablet} {
      transform: scale(1);
      object-position: 75%;
    }
    @media ${device.laptop} {
      transform: scale(1);
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35vh;
  left: 5vw;
  max-width: 260px;
  gap: 14px;
`;

export const Header = styled.h1`
  font-style: normal;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 40px;
  line-height: 100%;

  span {
    font-weight: 300;
  }

  @media ${device.mobileM} {
    font-size: 48px;
  }
  @media ${device.mobileL} {
    font-size: 54px;
  }
  @media ${device.mobileXL} {
    font-size: 62px;
  }
  @media ${device.tablet} {
    font-size: 72px;
  }
  @media ${device.laptop} {
    font-size: 80px;
  }
  @media ${device.laptopM} {
    font-size: 90px;
  }
  @media ${device.laptopL} {
    font-size: 100px;
  }
`;

export const SocialWrapper = styled.ul`
  display: flex;
  gap: 13px;
  @media ${device.tablet} {
    gap: 16px;
  }
`;

export const SocialLink = styled.a`
  img {
    width: 29px;
    height: 29px;

    @media ${device.tablet} {
      width: 40px;
      height: 40px;
    }
  }

  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;
