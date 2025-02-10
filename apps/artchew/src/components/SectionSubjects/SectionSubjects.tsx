import { DefaultSection } from '../DefaultSection';
import { StudentReview } from '../StudentReview';
import styles from './SectionReviews.module.scss';

import data from './data.json'

export const SectionSubjects = () => {
  return (
    <DefaultSection title="Review">
      <div className={styles.items}>
        {data.map((item) => (
          <StudentReview key={item.name} {...item} />
        ))}
      </div>
    </DefaultSection>
  );
}

export default SectionSubjects;