import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../styles';

export const Wrapper = styled(motion.main)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;
`;

export const Content = styled(motion.main)`
  width: 100%;
  min-height: 100vh;

  @media ${device.laptop} {
    padding: 0 16px;
  }

  @media ${device.laptopL} {
    padding: 0 25px;
  }
`;
