import Image from 'next/image';
import * as S from './HeroSection.styled';
import { background, facebook, instagram, whatsup } from '../../assets';
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
    <S.HeaderWrapper>
      <S.Header>
        tutaj stworzymy <span>piękno</span>
      </S.Header>
      <S.SocialWrapper>
        <S.SocialLink href="#">
          <Image src={whatsup} alt="whatsup" />
        </S.SocialLink>
        <S.SocialLink href="#">
          <Image src={instagram} alt="instagram" />
        </S.SocialLink>
        <S.SocialLink href="#">
          <Image src={facebook} alt="facebook" />
        </S.SocialLink>
      </S.SocialWrapper>
    </S.HeaderWrapper>
  </S.Wrapper>
);
