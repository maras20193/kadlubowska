import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 170px;

  @media ${device.laptop} {
    margin-top: 400px;
  }

  .swiper {
    width: 100%;
    margin-top: 40px;
    padding-right: 30px;
    padding-left: 30px;

    @media ${device.laptop} {
      margin-top: 50px;
    }
  }

  .swiperSlide {
    display: flex;
    align-self: center;
    justify-content: center;
  }
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
`;
