import styled from 'styled-components';

export const LineSeparator = styled.div`
  width: 100%;
  height: 12px;
  border: 2px solid ${({ theme }) => theme.colors.text.primary};
  border-bottom: none;
`;
