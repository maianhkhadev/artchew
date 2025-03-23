import { PricePanel } from '@artchew/artchew-components';
import { SectionArticles } from '../../components/SectionArticles';
import styles from './page.module.scss';

export default function Courses() {
  return (
    <div className={styles.page}>
      <PricePanel />

      <SectionArticles />
    </div>
  );
};
