import { useRouter } from 'next/router';
import * as S from './Layout.styled';

const fadeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <S.Wrapper
      key={router.route}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeVariants}
    >
      {children}
    </S.Wrapper>
  );
};
