'use client';
import { Display, Paragraph } from 'rebear';
import { Container } from '@artchew/artchew-components';
import styles from './SectionHeroCourses.module.scss';
import img from './hero.jpg';

export const SectionHero = () => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img.src})` }}>
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
