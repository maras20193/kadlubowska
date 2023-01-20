import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  transition: 0.3s;

  :hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
  }
`;
