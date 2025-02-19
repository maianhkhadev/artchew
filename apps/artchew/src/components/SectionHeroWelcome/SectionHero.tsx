'use client';
import { Display, Title, Paragraph } from 'rebear';
import { Container } from '../Container';
import styles from './SectionHero.module.scss';
import img from './hero.png';

export const SectionHero = () => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img.src})` }}>
      <Container>
        <Display className={styles.title}>Artchew</Display>
        <div className={styles.description}>
          <Title level={3}>Artchew course<br />by Người đá</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Paragraph>
        </div>
      </Container>
    </div>
  );
};

export default SectionHero;
