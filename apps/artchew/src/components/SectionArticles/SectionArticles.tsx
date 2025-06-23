import { SectionDefault } from '../SectionDefault';
import { Article } from './Article';
import { useArticles } from '@artchew/data-access-articles';
import styles from './SectionArticles.module.scss';

export const SectionArticles = () => {
  const { data = [] } = useArticles();

  return (
    <SectionDefault title="Giáo trình">
      <div className={styles.items}>
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </div>
    </SectionDefault>
  );
};

export default SectionArticles;
