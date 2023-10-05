import Image from 'next/image';
import * as S from './WorkInProgressSection.styled';
import { background, logoText } from '../../assets';
import { opacityVariant, opacityVariantFast } from '../../animations';

export const WorkInProgressSection = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Image src={logoText} alt="kadłubowska" />
    </S.LogoWrapper>
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

    <S.Header initial="offscreen" animate="onscreen" variants={opacityVariant}>
      Strona <span>w&nbsp;budowie</span>
    </S.Header>
  </S.Wrapper>
);
