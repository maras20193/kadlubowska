import styled from 'styled-components';
import { device } from '../../styles';

const HeaderBig = styled.p``;
const Header = styled.p`
  font-size: 38px;
  font-weight: 100;
  line-height: 84.221%;
  font-weight: 38px;
  text-transform: uppercase;

  @media ${device.mobileXL} {
    font-size: 50px;
  }

  @media ${device.laptop} {
    font-size: 70px;
  }
`;
const HeaderSmall = styled.p``;
const BodyBig = styled.p``;
const Body = styled.p``;
const BodySmall = styled.p``;
const Description = styled.p``;
const Review = styled.p``;
const SectionHeader = styled.h1``;

export const Typography = {
  HeaderBig,
  Header,
  HeaderSmall,
  BodyBig,
  Body,
  BodySmall,
  Description,
  Review,
  SectionHeader,
};
