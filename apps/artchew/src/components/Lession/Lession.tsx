'use client';
import { Title, Paragraph } from 'rebear';
import styles from './Lession.module.scss';

type LessionProps = {
  thumbnailUrl: string;
  title: string;
  description: string;
};

export const Lession = (props: LessionProps) => {
  const { thumbnailUrl, title, description } = props;

  return (
    <div className={styles.lession}>
      <div
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      />
      <Title className={styles.title} level={3}>
        {title}
      </Title>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default Lession;
