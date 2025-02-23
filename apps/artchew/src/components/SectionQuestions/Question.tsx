'use client';
import Image from 'next/image';
import { Title, Paragraph } from 'rebear';
import styles from './Question.module.scss';
import src from './active.svg';

type QuestionProps = {
  active: boolean;
  id: number;
  question: string;
  answer: string;
  onClick: (id: number) => void;
};

export const Question = (props: QuestionProps) => {
  const { active, id, question, answer, onClick } = props;

  return (
    <div className={styles.accordion}>
      {active && <Image className={styles.icon} src={src} alt="" />}

      <div
        className={styles.question}
        onClick={() => {
          onClick(id);
        }}
      >
        <Title level={3} dangerouslySetInnerHTML={{ __html: question }} />
      </div>

      {active && (
        <div className={styles.answer}>
          <Paragraph dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

export default Question;
