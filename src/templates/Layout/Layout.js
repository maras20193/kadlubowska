import { useRouter } from 'next/router';
import { opacityVariant } from '../../animations';
import * as S from './Layout.styled';

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
      {children}
    </S.Wrapper>
  );
};
