import Image from 'next/image';
import { hamburger, logoText } from '../../../assets';
import * as S from './Navigation.styled';

export const Navigation = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Image src={logoText} alt="kadlubowska logo" />
    </S.LogoWrapper>
    <S.Hamburger>
      <Image src={hamburger} alt="open hamburger menu" />
    </S.Hamburger>
  </S.Wrapper>
);
