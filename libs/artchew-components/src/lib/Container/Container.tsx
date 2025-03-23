import styles from './Container.module.scss';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};

export default Container;
