import { SectionHero } from '../../components/SectionHeroArticle';
import { PricePanel } from '../../components/PricePanel';
import { SectionLessions } from '../../components/SectionLessions';

export default function Article() {
  return (
    <div>
      <SectionHero />

      <PricePanel />

      <SectionLessions title="Bài giảng" />
    </div>
  );
};
