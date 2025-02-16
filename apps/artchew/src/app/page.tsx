import { PricePanel } from '../components/PricePanel';
import { SectionStudentArts } from '../components/SectionStudentArts';
import { SectionReviews } from '../components/SectionReviews';
import { SectionArticles } from '../components/SectionArticles';
import styles from './page.module.scss';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      {/* <PricePanel /> */}

      <SectionStudentArts />

      <SectionReviews />

      <SectionArticles />
    </div>
  );
}
