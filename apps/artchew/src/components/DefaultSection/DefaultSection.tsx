"use client"
import { Display } from 'rebear';
import { Container } from '../Container';
import styles from './DefaultSection.module.scss';

type DefaultSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const DefaultSection = (props: DefaultSectionProps) => {
  const { title, children } = props;

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Display className={styles.title}>{title}</Display>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </section>
  );
};

export default DefaultSection;
