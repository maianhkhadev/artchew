'use client';
import { Display, Title, Paragraph } from 'rebear';
import { Container } from '@artchew/artchew-components';
import styles from './SectionHero.module.scss';
import img from './hero.png';

export const SectionHero = () => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${img.src})` }}>
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
