import { SectionHero } from '../../components/SectionHeroArticle';
import { SectionArticleContent } from '../../components/SectionArticleContent';
import { PricePanel } from '../../components/PricePanel';
import { SectionLessions } from '../../components/SectionLessions';

export default function Article() {
  return (
    <div>
      <SectionHero />

      <SectionArticleContent />

      <PricePanel />

      <SectionLessions title="Bài giảng" />
    </div>
  );
};
