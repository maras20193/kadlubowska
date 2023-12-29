import styled from 'styled-components';
import { OutlineBorder } from '../../components';
import { device } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 65px 40px;
  background-color: ${({ theme }) => theme.colors.background.third};

  img {
    width: 284px;
  }

  @media ${device.laptop} {
    flex-direction: row;
    gap: 30px;
    align-items: flex-start;
  }
  @media ${device.laptopM} {
    gap: 70px;
  }

  @media ${device.laptopM} {
    gap: 100px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  &:first-child {
    align-self: center;
  }
`;

export const WarsawLogo = styled(OutlineBorder)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  margin: 40px 0;

  @media ${device.laptop} {
    margin: 0;
  }
`;
export const LogoFirstRow = styled.div`
  font-size: 15px;
  line-height: 100%; /* 15px */
  font-weight: 400;
  letter-spacing: 1.65px;

  font-style: normal;
`;
export const LogoSecondRow = styled.div`
  font-size: 36px;
  line-height: 84.221%;
  font-style: normal;
  font-weight: 500;
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  gap: 8px;
`;

export const Title = styled.p`
  font-weight: 500;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
