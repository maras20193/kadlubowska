import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 170px;
  height: 170px;
  object-fit: cover;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
