import * as S from './VipInfo.styled';

export const VipInfo = () => (
  <S.Wrapper>
    <S.InfoRow>
      <S.Title>USŁUGA VIP - TERMIN EXPRESS</S.Title>
      <div>
        <S.Uppercase>PO GODZINACH PRACY, W WEEKENDY</S.Uppercase>
        <p>+50% ceny pakietu</p>
      </div>
    </S.InfoRow>
    <S.InfoRow>
      <S.Title>PAKIET</S.Title>
      <div>
        <S.Uppercase>BRWI, USTA, POWIEKI</S.Uppercase>
        <p>-15% ceny zabiegu</p>
      </div>
    </S.InfoRow>
    <S.InfoRow>
      <S.Title>ZADATEK</S.Title>
      <S.LastInfoWrapper>
        <p style={{ lineHeight: '160%' }}>
          jest jedyną formą potwierdzenia wcześniej umówionego terminu. Miejsce
          przepada, jeśli zadatek nie zostanie uiszczony
          <span> w terminie 3 dni.</span>
          Zadatek przepada w przypadku odwołania wizyty oraz przełożenia jej na
          inny termin w dniu umówionego zabiegu. Zadatek jest też formą
          konsultacji, jeżeli zabieg nie odbędzie się np. z powodu zatajenia
          informacji o stanie zdrowia i przyjmowanych lekach, nieporozumienia na
          płaszczyźnie estetycznej.
          <span>
            {' '}
            Informuję. że w trosce o bezpieczeństwo i zadowolenie moich Klientek
            mam prawo do odmówienia wykonania zabiegu.
          </span>
        </p>
        <S.Uppercase>
          ZAPISUJĄC SIĘ NA ZABIEG, W PEŁNI AKCETPUJESZ WSZYSTKIE WARUNKI I
          SUGESTIE DOTYCZĄCE ZABIEGU.
        </S.Uppercase>
      </S.LastInfoWrapper>
    </S.InfoRow>
  </S.Wrapper>
);
