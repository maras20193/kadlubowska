import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.main)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
`;
