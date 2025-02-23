'use client';
import Link from 'next/link';
import { Title, Paragraph, Button } from 'rebear';
import styles from './Article.module.scss';

type ArticleProps = {
  avatarUrl: string;
  title: string;
  content: string;
};

export const Article = (props: ArticleProps) => {
  const { avatarUrl, title, content } = props;

  return (
    <div className={styles.article}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${avatarUrl})` }}
      />
      <Title className={styles.title} level={3}>
        {title}
      </Title>
      <Paragraph className={styles.content}>{content}</Paragraph>
      <Link href="/article">
        <Button className={styles.viewMore} variant="secondary" size="2xl">
          Xem thêm thông tin
        </Button>
      </Link>
    </div>
  );
};

export default Article;
