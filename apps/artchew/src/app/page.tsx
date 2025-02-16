import { SectionHero } from '../components/SectionHeroWelcome';
import { SectionReviews } from '../components/SectionReviews';
import styles from './page.module.scss';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <SectionHero />

      <SectionReviews />
    </div>
  );
}
