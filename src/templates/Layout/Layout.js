import { useRouter } from 'next/router';
import { opacityVariant } from '../../animations';
import * as S from './Layout.styled';
import { Navigation } from './Navigation/Navigation';

export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <S.Wrapper
      key={router.route}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={opacityVariant}
    >
      <Navigation />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
