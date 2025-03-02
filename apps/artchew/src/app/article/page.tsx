import { SectionHero } from '../../components/SectionHeroArticle';
import { SectionArticleContent } from '../../components/SectionArticleContent';
import { PricePanel } from '../../components/PricePanel';
import { SectionLessions } from '../../components/SectionLessions';
import { useArticle } from '@artchew/data-access-articles';

export default function Article() {
  const { data } = useArticle();

  return (
    <div>
      <SectionHero />

      <SectionArticleContent />

      <PricePanel />

      <SectionLessions title="Bài giảng" />
    </div>
  );
}
