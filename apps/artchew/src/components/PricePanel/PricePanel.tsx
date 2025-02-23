'use client';
import { Title, Paragraph } from 'rebear';
import { Container } from '../Container';
import { Course } from './Course';
import styles from './PricePanel.module.scss';

import courses from './courses.json';

export const PricePanel = () => {
  return (
    <Container>
      <div className={styles.pricePanel}>
        <div className={styles.panelContent}>
          <div className={styles.menu}>
            <div className={styles.menuHeader}>
              <Title className={styles.name} level={3} />
              <Paragraph>Số lượng bài giảng</Paragraph>
              <Paragraph>Quy mô lớp</Paragraph>
              <Paragraph>Thời gian học</Paragraph>
            </div>

            <div className={styles.divider} />

            <div className={styles.menuContent}>
              <Paragraph>Giáo trình</Paragraph>
              <Paragraph className={styles.menuItem}>Phối cảnh</Paragraph>
              <Paragraph className={styles.menuItem}>Dựng hình</Paragraph>
              <Paragraph className={styles.menuItem}>Ánh sáng</Paragraph>
              <Paragraph className={styles.menuItem}>Line Art</Paragraph>
              <Paragraph className={styles.menuItem}>Anatomy căn bản</Paragraph>
              <Paragraph className={styles.menuItem}>Cách điệu</Paragraph>
              <Paragraph className={styles.menuItem}>
                Quy trình lên màu
              </Paragraph>
              <Paragraph className={styles.menuItem}>
                Lý thuyết màu sắc
              </Paragraph>
              <Paragraph className={styles.menuItem}>
                Layout & Composition
              </Paragraph>
            </div>

            <div className={styles.divider} />

            <div className={styles.menuFooter}>
              <Paragraph>Học phí</Paragraph>
            </div>
          </div>

          {courses.map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricePanel;
