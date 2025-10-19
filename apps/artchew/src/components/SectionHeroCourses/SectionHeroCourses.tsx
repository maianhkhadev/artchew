'use client';
import { Display, Paragraph } from 'rebear';
import { Container } from '@artchew/artchew-components';
import { useProgressiveImage } from '@artchew/util-progressive-image';
import styles from './SectionHeroCourses.module.scss';
import src400 from './hero-400.jpg';
import src800 from './hero-800.jpg';
import src1200 from './hero-1200.jpg';
import src1600 from './hero-1600.jpg';
import src2000 from './hero-2000.jpg';

export const SectionHero = () => {
  const src = useProgressiveImage([src400.src, src800.src, src1200.src, src1600.src, src2000.src]);

  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${src})` }}>
      <Container>
        <main className={styles.sectionMain}>
          <Display className={styles.title}>Thông tin khoá học</Display>
          <Paragraph className={styles.description}>
            Phong cách được chọn để giúp học viên tiếp cận kiến thức Nền Tảng Minh Họa ở Artchew sẽ là Flat Pop Art, một phong cách thân thiện và dễ ứng dựng thực tế với người mới bắt đầu. Kỹ năng thực hành Flat Pop Art còn bổ trợ trực tiếp cho các công việc liên quan đến: Thiết Kế Đồ Họa, Xây Dựng Key Visual, Storyboard, Hoạt Hình, Concept Visualization.
          </Paragraph>
        </main>
      </Container>
    </div>
  );
};

export default SectionHero;
