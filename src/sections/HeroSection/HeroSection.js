import Image from 'next/image';
import * as S from './HeroSection.styled';
import { background } from '../../assets';
import { opacityVariantFast } from '../../animations';

export const HeroSection = () => (
  <S.Wrapper>
    <S.ImageWrapper
      initial="offscreen"
      animate="onscreen"
      variants={opacityVariantFast}
    >
      <Image
        src={background}
        alt="background image"
        width={1000}
        quality={100}
      />
    </S.ImageWrapper>
  </S.Wrapper>
);
