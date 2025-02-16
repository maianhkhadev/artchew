import { SectionHero } from '../../components/SectionHeroSubject';
import { SectionLessions } from '../../components/SectionLessions';

export default function Subject() {
  return (
    <div>
      <SectionHero />

      {/* <PricePanel /> */}

      <SectionLessions title="Bài giảng" />
    </div>
  );
};
