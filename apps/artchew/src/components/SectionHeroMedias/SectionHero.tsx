'use client';
import { Display, Paragraph } from 'rebear';
import { Container } from '@artchew/artchew-components';
import { useProgressiveImage } from '@artchew/util-progressive-image';
import styles from './SectionHero.module.scss';
import src400 from './hero-400.jpg';
import src800 from './hero-800.jpg';
import src1200 from './hero-1200.jpg';
import src1600 from './hero-1600.jpg';
import src2000 from './hero-2000.jpg';

export const SectionHero = () => {
  const src = useProgressiveImage([src400.src, src800.src, src1200.src, src1600.src, src2000.src]);

  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${src})` }}>
      <Container>
        <main className={styles.sectionMain}>
          <Display className={styles.title}>Video</Display>
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
