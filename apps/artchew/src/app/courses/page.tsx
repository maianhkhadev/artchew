import { SectionHero } from '../../components/SectionHeroCourses';
import { PricePanel } from '@artchew/artchew-components';
import { SectionArticles } from '../../components/SectionArticles';

export default function Courses() {
  return (
    <div>
      <SectionHero />

      <PricePanel />

      <SectionArticles />
    </div>
  );
};
