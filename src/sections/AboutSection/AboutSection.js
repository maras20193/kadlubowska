import { useState } from 'react';
import Image from 'next/image';
import { arrow, arrowActive } from '../../assets';
import * as S from './AboutSection.styled';
import { useMediaQuery } from '../../hooks';
import { device } from '../../styles';
import { teamMembers } from './data';
import { SectionHeader } from '../../components/StartingSection/SectionHeader';

export const AboutSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const isLaptopView = useMediaQuery(device.laptop);

  return (
    <S.Wrapper>
      <SectionHeader title="o nas" />
      <S.ContentWrapper>
        <S.NamesWrapper>
          {teamMembers.map((member) => (
            <S.Name onClick={() => setActiveTeamMember(member.id)}>
              {member.name}
              <S.Icon>
                <Image
                  src={member.id === activeTeamMember ? arrowActive : arrow}
                />
              </S.Icon>
            </S.Name>
          ))}

          {isLaptopView && (
            <S.AboutInfo>
              {teamMembers[activeTeamMember].about.map((info) => (
                <p>{info}</p>
              ))}
            </S.AboutInfo>
          )}
        </S.NamesWrapper>
        <S.ImageWrapper>
          <Image
            src={teamMembers[activeTeamMember].image}
            alt="team member"
            width={400}
            height={400}
          />
        </S.ImageWrapper>
        {!isLaptopView && (
          <S.AboutInfo>
            {teamMembers[activeTeamMember].about.map((info) => (
              <p>{info}</p>
            ))}
          </S.AboutInfo>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
