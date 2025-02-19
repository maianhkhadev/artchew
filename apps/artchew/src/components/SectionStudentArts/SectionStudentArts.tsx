import { SectionDefault } from '../SectionDefault';
import { StudentArt } from '../StudentArt';
import styles from './SectionStudentArts.module.scss';

import arts from './arts.json'

export const SectionStudentArts = () => {
  return (
    <SectionDefault title="Sản phẩm">
      <div className={styles.items}>
        {arts.map((art) => (
          <StudentArt key={art.id} {...art} />
        ))}
      </div>
    </SectionDefault>
  );
}

export default SectionStudentArts;