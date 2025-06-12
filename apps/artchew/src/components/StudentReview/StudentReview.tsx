'use client';
import Link from 'next/link';
import { Title, Paragraph } from 'rebear';
import styles from './StudentReview.module.scss';

type StudentReviewProps = {
  id: number;
  avatarUrl: string;
  name: string;
  content: string;
};

export const StudentReview = (props: StudentReviewProps) => {
  const { id, avatarUrl, name, content } = props;

  return (
    <Link className={styles.studentReview} href={`/student/${id}`}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${avatarUrl})` }}
      />
      <Title className={styles.name} level={3}>
        {name}
      </Title>
      <Paragraph>{content}</Paragraph>
    </Link>
  );
};

export default StudentReview;
