import { Button, OutlineBorder } from '../../components';
import { SectionHeader } from '../../components/StartingSection/SectionHeader';
import * as S from './CoursesSection.styled';
import { coursesData } from './coursesData';

export const CoursesSection = () => (
  <S.Wrapper>
    <SectionHeader title="szkolenia" />
    <S.CoursesWrapper>
      {coursesData.map((course) => (
        <S.Course>
          <OutlineBorder lighter={!course.info}>{course.name}</OutlineBorder>
          <S.LevelText>{course.level}</S.LevelText>
          {course.info && (
            <>
              <S.InfoText>
                {course.info.map((info) => (
                  <p>{info}</p>
                ))}
              </S.InfoText>
              <S.ButtonWrapper>
                <Button>szczegóły</Button>
              </S.ButtonWrapper>
            </>
          )}
        </S.Course>
      ))}
    </S.CoursesWrapper>
  </S.Wrapper>
);
