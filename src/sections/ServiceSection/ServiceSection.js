import Image from 'next/image';
import { Button, LineSeparator, OutlineBorder } from '../../components';
import { SectionHeader } from '../../components/StartingSection/SectionHeader';
import * as S from './ServiceSection.styled';
import { serviceData } from './serviceData';
import { serviceBackground } from '../../assets';

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
    <S.ImageWrapper>
      <S.ModelInfoWrapper>
        <S.ModelTitle>Zostań modelką</S.ModelTitle>
        <S.ModelInfo>
          przez cały rok możesz wykonać makijaż permanentny brwi w atrakcyjnej
          cenie
        </S.ModelInfo>
        <S.ButtonWrapper>
          <Button>szczegóły</Button>
        </S.ButtonWrapper>
      </S.ModelInfoWrapper>
      <Image src={serviceBackground} alt="service background" />
    </S.ImageWrapper>
  </S.Wrapper>
);
