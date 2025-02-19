import { SectionQuestions } from '../../components/SectionQuestions';
import styles from './page.module.scss';

export default function Questions() {
  return (
    <div className={styles.page}>
      <SectionQuestions />
    </div>
  );
}
