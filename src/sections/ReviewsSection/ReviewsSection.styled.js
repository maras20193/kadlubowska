import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../styles';

export const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};

  .swiper {
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    max-width: 860px;

    @media ${device.laptop} {
      max-width: 1280px;
    }
  }

  .swiperSlide {
    display: flex;
    align-self: center;
    justify-content: center;
  }

  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.text.primary};

    &::after {
      margin-right: 25px;
    }
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.colors.text.primary};

    &::after {
      margin-left: 25px;
    }
  }
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 365px;

  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.box.background};
  box-shadow: ${({ theme }) => theme.colors.box.boxShadow};

  padding: 30px 35px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  line-height: 110%; /* 30.8px */
  font-style: normal;
  font-weight: 400;

  p:last-child {
    font-weight: 700;
  }
`;
export const Info = styled.p`
  font-size: 13px;
  line-height: 170%; /* 22.1px */
  font-style: normal;
  font-weight: 400;
`;
