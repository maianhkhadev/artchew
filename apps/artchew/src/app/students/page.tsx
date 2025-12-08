import { SectionStudentArts } from '../../components/SectionStudentArts';
import { SectionReviews } from '../../components/SectionReviews';
import styles from './page.module.scss';

export default function Students() {
  return (
    <div className={styles.page}>
      <SectionStudentArts />

      <SectionReviews title="Human of artchew" />
    </div>
  );
};
