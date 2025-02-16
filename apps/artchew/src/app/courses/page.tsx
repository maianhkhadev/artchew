import { PricePanel } from '../../components/PricePanel';
import { SectionArticles } from '../../components/SectionArticles';
import styles from './page.module.scss';

export const Courses = () => {
  return (
    <div className={styles.page}>
      {/* <PricePanel /> */}

      <SectionArticles />
    </div>
  );
};

export default Courses;
