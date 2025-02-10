import { DefaultSection } from '../DefaultSection';
// import { StudentReview } from '../StudentReview';
import styles from './SectionArticles.module.scss';

// import data from './data.json'

export const SectionArticles = () => {
  return (
    <DefaultSection title="Review">
      <div className={styles.items}>
        {/* {data.map((item) => (
          <StudentReview key={item.name} {...item} />
        ))} */}
      </div>
    </DefaultSection>
  );
}

export default SectionArticles;