import { DefaultSection } from '../DefaultSection';
import { Article } from './Article';
import styles from './SectionArticles.module.scss';

import articles from './articles.json'

export const SectionArticles = () => {
  return (
    <DefaultSection title="Review">
      <div className={styles.items}>
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </DefaultSection>
  );
}

export default SectionArticles;