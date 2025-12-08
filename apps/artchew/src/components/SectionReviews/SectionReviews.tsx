import { SectionDefault } from '../SectionDefault';
import { StudentReview } from '../StudentReview';
import { useReviews } from '@artchew/data-access-students';
import styles from './SectionReviews.module.scss';

type SectionReviewsProps = {
  title: string;
};

export const SectionReviews = (props: SectionReviewsProps) => {
  const { title } = props;
  const { data: reviews = [] } = useReviews();

  return (
    <SectionDefault title={title}>
      <div className={styles.items}>
        {reviews.map((review) => (
          <StudentReview key={review.name} {...review} />
        ))}
      </div>
    </SectionDefault>
  );
};

export default SectionReviews;
