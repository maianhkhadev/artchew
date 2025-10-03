/* eslint-disable @next/next/no-img-element */
'use client';
import { Title, Paragraph } from 'rebear';
import { Container } from '@artchew/artchew-components';
import styles from './SectionArticleContent.module.scss';

type SectionArticleContentProps = {
  title: string;
  content: string;
  images: string[];
}

export const SectionArticleContent = (props: SectionArticleContentProps) => {
  const { title, content, images } = props;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.information}>
            <Title level={3}>{title}</Title>
            <Paragraph dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          <div className={styles.images}>
            {images.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionArticleContent;
