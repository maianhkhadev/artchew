'use client';
import { Display, Title, Paragraph } from 'rebear';
import { Container } from '@artchew/artchew-components';
import styles from './SectionHero.module.scss';
import img from './hero.png';

export const SectionHero = () => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img.src})` }}>
      <Container>
        <Display className={styles.title}>Artchew</Display>
        <Title level={3} className={styles.subtitle}>
          Artchew course by Người đá
        </Title>
        <Paragraph className={styles.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
          eget dolor. Aenean massa.
        </Paragraph>
      </Container>
    </div>
  );
};

export default SectionHero;
