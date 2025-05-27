'use client';
import { useState } from 'react';
import { Title, Paragraph } from 'rebear';
import { ModalReviewDetails } from './ModalReviewDetails';
import styles from './StudentReview.module.scss';

type StudentReviewProps = {
  avatarUrl: string;
  name: string;
  content: string;
};

export const StudentReview = (props: StudentReviewProps) => {
  const { avatarUrl, name, content } = props;
  const [open, onOpenChange] = useState(false);

  const handleClick = () => {
    onOpenChange(true);
  };

  return (
    <>
      <div className={styles.studentReview} onClick={handleClick}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
        <Title className={styles.name} level={3}>
          {name}
        </Title>
        <Paragraph>{content}</Paragraph>
      </div>

      <ModalReviewDetails
        open={open}
        onOpenChange={onOpenChange}
        avatarUrl={avatarUrl}
        name={name}
        content={content}
      />
    </>
  );
};

export default StudentReview;
