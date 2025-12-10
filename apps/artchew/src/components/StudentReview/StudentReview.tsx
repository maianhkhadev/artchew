'use client';
import { Title, Paragraph } from 'rebear';
import styles from './StudentReview.module.scss';

type StudentReviewProps = {
  id: number;
  avatarUrl: string;
  name: string;
  content: string;
};

export const StudentReview = (props: StudentReviewProps) => {
  const { avatarUrl, name, content } = props;

  return (
    <div className={styles.studentReview}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${avatarUrl})` }}
      />
      <Title className={styles.name} level={3}>
        {name}
      </Title>
      <Paragraph>{content}</Paragraph>
    </div>
  );
};

export default StudentReview;
