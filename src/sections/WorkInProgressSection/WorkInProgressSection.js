import Image from 'next/image';
import * as S from './WorkInProgressSection.styled';
import { background, logoText } from '../../assets';

export const WorkInProgressSection = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Image src={logoText} alt="kadłubowska" />
    </S.LogoWrapper>
    <S.ImageWrapper>
      <Image
        src={background}
        al="background image"
        width={4000}
        quality={100}
      />
    </S.ImageWrapper>
  </S.Wrapper>
);
