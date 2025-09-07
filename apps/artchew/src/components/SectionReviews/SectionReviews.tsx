import { SectionDefault } from '../SectionDefault';
import { StudentReview } from '../StudentReview';
import { useReviews } from '@artchew/data-access-students';
import styles from './SectionReviews.module.scss';

type SectionReviewsProps = {
  title: string;
  redirectToDetails: boolean;
};

export const SectionReviews = (props: SectionReviewsProps) => {
  const { title, redirectToDetails } = props;
  const { data: reviews = [] } = useReviews();

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
