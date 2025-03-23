"use client"
import { Display } from 'rebear';
import { Container } from '@artchew/artchew-components';
import styles from './SectionDefault.module.scss';

type SectionDefaultProps = {
  title: string;
  children: React.ReactNode;
};

export const SectionDefault = (props: SectionDefaultProps) => {
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

export default SectionDefault;
