import { SectionHero } from '../../components/SectionHeroMedias';
import { SectionLessions } from '../../components/SectionLessions';

export const Medias = ()=> {
  return (
    <div>
      <SectionHero />

      <SectionLessions title="Phối cảnh" />

      <SectionLessions title="Dựng hình" />

      <SectionLessions title="Ánh sáng" />

      <SectionLessions title="Anatomy cơ bản" />

      <SectionLessions title="Layout & composition" />

      <SectionLessions title="Lý thuyết màu sắc" />
    </div>
  );
}

export default Medias
