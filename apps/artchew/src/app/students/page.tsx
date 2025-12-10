import { SectionStudentArts } from '../../components/SectionStudentArts';
import { SectionFriends } from '../../components/SectionFriends';
import styles from './page.module.scss';

export default function Students() {
  return (
    <div className={styles.page}>
      <SectionStudentArts />

      <SectionFriends title="Human of artchew" />
    </div>
  );
};
