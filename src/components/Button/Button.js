import Image from 'next/image';
import * as S from './Button.styled';
import { buttonArrowGrey } from '../../assets';

export const Button = ({ children }) => (
  <S.Wrapper>
    {children}
    <Image src={buttonArrowGrey} />
  </S.Wrapper>
);
