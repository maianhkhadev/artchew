import { SectionDefault } from '../SectionDefault';
import { Article } from './Article';
import styles from './SectionArticles.module.scss';

import articles from './articles.json'

export const SectionArticles = () => {
  return (
    <SectionDefault title="Khoá học">
      <div className={styles.items}>
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </SectionDefault>
  );
}

export default SectionArticles;