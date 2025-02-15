import { DefaultSection } from '../DefaultSection';
import { StudentArt } from '../StudentArt';
import styles from './SectionStudentArts.module.scss';

import arts from './arts.json'

export const SectionStudentArts = () => {
  return (
    <DefaultSection title="Review">
      <div className={styles.items}>
        {arts.map((art) => (
          <StudentArt key={art.id} {...art} />
        ))}
      </div>
    </DefaultSection>
  );
}

export default SectionStudentArts;