import { useState } from 'react';
import { SectionHeader } from '../../components/StartingSection/SectionHeader';
import * as S from './FAQSection.styled';
import { faqData } from './faqData';
import { FaqItem } from '../../components';

export const FAQSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <S.Wrapper>
      <SectionHeader title="Q&A" />
      <S.FAQWrapper>
        <S.FAQNav>
          {faqData.map((group) => (
            <S.FaqNavItem
              key={group.group}
              onClick={() => setSelected(group.id)}
              active={group.id === selected}
            >
              {group.group}
            </S.FaqNavItem>
          ))}
        </S.FAQNav>
        <S.FAQInfoWrapper>
          {faqData
            .find((group) => group.id === selected)
            .questions.map((quest) => (
              <FaqItem name={quest.name} answer={quest.answer} />
            ))}
        </S.FAQInfoWrapper>
      </S.FAQWrapper>
    </S.Wrapper>
  );
};
