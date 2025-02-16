import styles from './SectionHero.module.scss';
import img from './hero.jpeg';

export const SectionHero = () => {

  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img.src})` }} />
  );
};

export default SectionHero;
