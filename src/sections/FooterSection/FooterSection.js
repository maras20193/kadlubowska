import Image from 'next/image';
import { logoTextBlack } from '../../assets';
import * as S from './FooterSection.styled';
import { footerData } from './footerData';

export const FooterSection = () => (
  <S.Wrapper>
    <S.Column>
      <Image src={logoTextBlack} alt="kadlubowska logo" />
    </S.Column>
    <S.Column>
      <S.WarsawLogo>
        <S.LogoFirstRow>coming soon</S.LogoFirstRow>
        <S.LogoSecondRow>Warszawa</S.LogoSecondRow>
      </S.WarsawLogo>
      <S.FooterItem>
        <S.Title>{footerData.place.name}</S.Title>
        <S.Info>
          <p>{footerData.place.street}</p>
          <p>{footerData.place.city}</p>
        </S.Info>
      </S.FooterItem>
      <S.FooterItem>
        <S.Title>{footerData.contacts[0].name}</S.Title>
        <S.Info>
          <p>{`tel. ${footerData.contacts[0].phone}`}</p>
          <p>{`e-mail. ${footerData.contacts[0].mail}`}</p>
        </S.Info>
      </S.FooterItem>
    </S.Column>
    <S.Column>
      {footerData.contacts.slice(1).map((item) => (
        <S.FooterItem>
          <S.Title>{item.name}</S.Title>
          <S.Info>
            <p>{`tel. ${item.phone}`}</p>
            <p>{`e-mail. ${item.mail}`}</p>
          </S.Info>
        </S.FooterItem>
      ))}
    </S.Column>
  </S.Wrapper>
);
