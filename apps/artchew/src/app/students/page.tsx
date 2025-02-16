import { SectionStudentArts } from '../../components/SectionStudentArts';
import { SectionReviews } from '../../components/SectionReviews';
import styles from './page.module.scss';

export const Students = () => {
  return (
    <div className={styles.page}>
      <SectionStudentArts />

      <SectionReviews />
    </div>
  );
};

export default Students;
