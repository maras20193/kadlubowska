import { OutlineBorder } from '../../components';
import { SectionHeader } from '../../components/StartingSection/SectionHeader';
import * as S from './CoursesSection.styled';
import { coursesData } from './coursesData';

export const CoursesSection = () => (
  <S.Wrapper>
    <SectionHeader title="szkolenia" />
    <S.CoursesWrapper>
      {coursesData.map((course) => (
        <S.Course>
          <OutlineBorder>{course.name}</OutlineBorder>
          <S.LevelText>{course.level}</S.LevelText>
          <S.InfoText>{course.info}</S.InfoText>

          <OutlineBorder isSmall lighter>
            szczegóły
          </OutlineBorder>
        </S.Course>
      ))}
    </S.CoursesWrapper>
  </S.Wrapper>
);
