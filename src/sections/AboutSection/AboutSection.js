import { useState } from 'react';
import Image from 'next/image';
import { arrow, arrowActive } from '../../assets';
import * as S from './AboutSection.styled';
import { useMediaQuery } from '../../hooks';
import { device } from '../../styles';
import { aboutData } from './aboutData';
import { SectionHeader } from '../../components/StartingSection/SectionHeader';

export const AboutSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const isLaptopView = useMediaQuery(device.laptop);

  return (
    <S.Wrapper>
      <SectionHeader title="o nas" />
      <S.ContentWrapper>
        <S.NamesWrapper>
          {aboutData.map((member) => (
            <S.NameWrapper onClick={() => setActiveTeamMember(member.id)}>
              <S.Name active={member.id === activeTeamMember}>
                {member.name}
              </S.Name>
              <S.Icon>
                <Image
                  src={member.id === activeTeamMember ? arrowActive : arrow}
                />
              </S.Icon>
            </S.NameWrapper>
          ))}

          {isLaptopView && (
            <S.AboutInfo>
              {aboutData[activeTeamMember].about.map((info) => (
                <p>{info}</p>
              ))}
            </S.AboutInfo>
          )}
        </S.NamesWrapper>
        <S.ImageWrapper>
          <Image
            src={aboutData[activeTeamMember].image}
            alt="team member"
            width={400}
            height={400}
          />
        </S.ImageWrapper>
        {!isLaptopView && (
          <S.AboutInfo>
            {aboutData[activeTeamMember].about.map((info) => (
              <p>{info}</p>
            ))}
          </S.AboutInfo>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
