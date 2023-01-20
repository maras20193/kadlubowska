import Image from 'next/image';
import * as S from './SocialIcon.styled';

export const SocialIcon = ({ linkTo, src, alt, size }) => (
  <a href={linkTo} rel="noreferrer noopener" target="_blank">
    <S.ImageWrapper size={size}>
      <Image src={src} width={size} height={size} alt={alt} />
    </S.ImageWrapper>
  </a>
);
