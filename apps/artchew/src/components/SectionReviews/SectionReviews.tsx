import { SectionDefault } from '../SectionDefault';
import { StudentReview } from '../StudentReview';
import styles from './SectionReviews.module.scss';
import reviews from './reviews.json';

type SectionReviewsProps = {
  title: string;
  redirectToDetails: boolean;
};

export const SectionReviews = (props: SectionReviewsProps) => {
  const { title, redirectToDetails } = props;

  return (
    <SectionDefault title={title}>
      <div className={styles.items}>
        {reviews.map((review) => (
          <StudentReview
            key={review.name}
            {...review}
            redirectToDetails={redirectToDetails}
          />
        ))}
      </div>
    </SectionDefault>
  );
};

export default SectionReviews;
