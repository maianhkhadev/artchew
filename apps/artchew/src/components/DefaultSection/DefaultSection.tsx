import styles from './DefaultSection.module.scss';

type DefaultSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const DefaultSection = (props: DefaultSectionProps) => {
  const { title, children } = props;

  return (
    <section className={styles.section}>
      <header className={styles.header}>{title}</header>
      <main>
        <div className={styles.container}>{children}</div>
      </main>
    </section>
  );
};

export default DefaultSection;
