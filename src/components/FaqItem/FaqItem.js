import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './FaqItem.styled';
import { arrow, arrowActive } from '../../assets';

export const FaqItem = ({ name, answer }) => {
  const [isOpen, setIsOpen] = useState();

  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  return (
    <S.FaqItem isOpen={isOpen}>
      <button type="button" onClick={toggleIsOpen}>
        <div>
          <p>{name}</p>
          {isOpen && <span>{answer}</span>}
        </div>
        <Image src={isOpen ? arrowActive : arrow} />
      </button>
    </S.FaqItem>
  );
};
