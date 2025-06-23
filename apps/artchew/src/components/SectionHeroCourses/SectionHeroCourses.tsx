'use client';
import { Display, Paragraph } from 'rebear';
import { Container } from '@artchew/artchew-components';
import styles from './SectionHeroCourses.module.scss';
import img from './hero.jpg';

export const SectionHero = () => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img.src})` }}>
      <Container>
        <main className={styles.sectionMain}>
          <Display className={styles.title}>Thông tin khoá học</Display>
          <Paragraph className={styles.description}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Paragraph>
        </main>
      </Container>
    </div>
  );
};

export default SectionHero;
