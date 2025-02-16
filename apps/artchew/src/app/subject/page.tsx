import { SectionHero } from '../../components/SectionHeroSubject';
import { SectionLessions } from '../../components/SectionLessions';

export const Subject = ()=> {
  return (
    <div>
      <SectionHero />
      
      {/* <PricePanel /> */}

      <SectionLessions title="Bài giảng" />
    </div>
  );
}

export default Subject
