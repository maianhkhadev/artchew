'use client';
import { Display, Title, Paragraph } from 'rebear';
import { Container } from '@artchew/artchew-components';
import { useProgressiveImage } from '@artchew/util-progressive-image';
import styles from './SectionHero.module.scss';
import src400 from './hero-400.png';
import src800 from './hero-800.png';
import src1600 from './hero-1600.png';
import src2000 from './hero-2000.png';

export const SectionHero = () => {
  const src = useProgressiveImage([src400.src, src800.src, src1600.src, src2000.src]);

  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${src})` }}>
      <Container>
        <Display className={styles.title}>Artchew</Display>
        <Title level={3} className={styles.subtitle}>
          VỠ LÒNG, MỘT CÁCH NGHIÊM TÚC!
        </Title>
        <Paragraph className={styles.description}>
          Được thiết kế từ chính một người trái ngành, chương trình Nền Tảng Minh Họa ARTCHEW mang tới một phương pháp tiếp cận kiến thức minh họa mới, tinh gọn và thân thiện cho cả những người chưa từng cầm bút. Không học vẹt, không chép mẫu, không "luyện thi", không có những bí ẩn không lời giải thích, đơn thuần là sự giao thoa của tư duy khoa học, và sự tự do sáng tạo.
        </Paragraph>
      </Container>
    </div>
  );
};

export default SectionHero;
