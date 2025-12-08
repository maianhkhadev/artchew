'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Title, Paragraph } from 'rebear';
import { ModalStudentDetails } from './ModalStudentDetails';
import styles from './StudentReview.module.scss';

type StudentReviewProps = {
  id: number;
  avatarUrl: string;
  name: string;
  content: string;
  details: string;
};

export const StudentReview = (props: StudentReviewProps) => {
  const { avatarUrl, name, content, details } = props;
  const [open, onOpenChange] = useState(false);

  const handleShow = () => {
    onOpenChange(true);
  }

  return (
    <>
      <div className={styles.studentReview} onClick={handleShow}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
        <Title className={styles.name} level={3}>
          {name}
        </Title>
        <Paragraph>{content}</Paragraph>
      </div>

      <ModalStudentDetails
        open={open}
        onOpenChange={onOpenChange}
        content={details}
      />
    </>
  );
};

export default StudentReview;
