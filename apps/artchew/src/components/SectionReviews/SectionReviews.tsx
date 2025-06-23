import { SectionDefault } from '../SectionDefault';
import { StudentReview } from '../StudentReview';
import styles from './SectionReviews.module.scss';

import reviews from './reviews.json'

export const SectionReviews = () => {
  return (
    <SectionDefault title="Review">
      <div className={styles.items}>
        {reviews.map((review) => (
          <StudentReview key={review.name} {...review} />
        ))}
      </div>
    </SectionDefault>
  );
}

export default SectionReviews;