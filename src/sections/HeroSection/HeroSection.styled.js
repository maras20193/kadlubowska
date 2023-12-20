import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 63px;

  @media ${device.laptop} {
    padding-top: 102px;
  }

  @media ${device.laptopL} {
    padding-top: 111px;
  }
`;

export const ImageWrapper = styled(motion.div)`
  /* height: calc(100vh - 102px); */
  height: 100%;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 72% 10%;
    transform: scale(1.3) translateY(-30px);

    @media ${device.tablet} {
      transform: scale(1) translateY(-30px);
    }
  }
`;
