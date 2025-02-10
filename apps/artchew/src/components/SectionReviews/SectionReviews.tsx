import { DefaultSection } from '../DefaultSection';
import { StudentReview } from '../StudentReview';
import styles from './SectionReviews.module.scss';

import reviews from './reviews.json'

export const SectionReviews = () => {
  return (
    <DefaultSection title="Review">
      <div className={styles.items}>
        {reviews.map((review) => (
          <StudentReview key={review.name} {...review} />
        ))}
      </div>
    </DefaultSection>
  );
}

export default SectionReviews;