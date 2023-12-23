import { LineSeparator, OutlineBorder } from '../../components';
import { SectionHeader } from '../../components/StartingSection/SectionHeader';
import * as S from './ServiceSection.styled';
import { serviceData } from './serviceData';

export const ServiceSection = () => (
  <S.Wrapper>
    <SectionHeader title="zabiegi" />
    <S.ServicesWrapper>
      {serviceData.map((mainService) => (
        <S.ServiceTypeWrapper>
          <S.MainName>{mainService.name}</S.MainName>
          <LineSeparator />
          <S.SmallServices>
            {mainService.services.map((smallService) => (
              <S.OneService>
                <p>{smallService.name}</p>
                <OutlineBorder isSmall lighter as="button">
                  Szczegóły
                </OutlineBorder>
              </S.OneService>
            ))}
          </S.SmallServices>
        </S.ServiceTypeWrapper>
      ))}
    </S.ServicesWrapper>
  </S.Wrapper>
);
