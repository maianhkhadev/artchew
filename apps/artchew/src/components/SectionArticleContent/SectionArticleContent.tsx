/* eslint-disable @next/next/no-img-element */
'use client';
import { Title, Paragraph } from 'rebear';
import { Container } from '../Container';
import styles from './SectionArticleContent.module.scss';

export const SectionArticleContent = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.information}>
            <Title level={3}>NỘI DUNG KHÓA HỌC</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit
              amet.
            </Paragraph>
          </div>

          <div className={styles.images}>
            <img src="/images/item-01.jpeg" alt="" />
            <img src="/images/item-02.jpeg" alt="" />
            <img src="/images/item-03.jpeg" alt="" />
            <img src="/images/item-04.jpeg" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionArticleContent;
