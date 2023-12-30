import { SectionHeader } from '../../components/StartingSection/SectionHeader';
import * as S from './PriceSection.styled';
import { PriceItem } from './components/PriceItem/PriceItem';
import { priceData } from './priceData';

export const PriceSection = () => (
  <S.Wrapper>
    <SectionHeader title="cennik" />
    <S.MainWrapper>
      {priceData.map((service, index) => (
        <PriceItem service={service} index={index} />
      ))}
    </S.MainWrapper>
  </S.Wrapper>
);
