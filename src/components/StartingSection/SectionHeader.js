import React from 'react';
import { Typography } from '../Typography/Typography.styled';
import * as S from './SectionHeader.styled';

export const SectionHeader = ({ title }) => (
  <S.Wrapper>
    <Typography.Header as="h1">{title}</Typography.Header>
  </S.Wrapper>
);
