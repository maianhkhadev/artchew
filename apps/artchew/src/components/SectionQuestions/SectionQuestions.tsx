'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Title, Paragraph, Button } from 'rebear';
import { SectionDefault } from '../SectionDefault';
import { Question } from './Question';
import styles from './SectionQuestions.module.scss';

import questions from './questions.json';

export const SectionQuestions = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveId(id)
  }

  return (
    <SectionDefault title="Câu hỏi">
      {questions.map((question) => (
        <Question
          key={question.id}
          active={activeId === question.id}
          {...question}
          onClick={handleClick}
        />
      ))}
    </SectionDefault>
  );
};

export default SectionQuestions;
