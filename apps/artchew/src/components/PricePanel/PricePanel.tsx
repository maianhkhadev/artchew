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
        <div className={styles.menu}>
          <div />
          <div>Số lượng bài giảng</div>
          <div>Quy mô lớp</div>
          <div>Thời gian học</div>
          <div>Giáo trình</div>
          <div>Phối cảnh</div>
          <div>Dựng hình</div>
          <div>Ánh sáng</div>
          <div>Line Art</div>
          <div>Anatomy căn bản</div>
          <div>Cách điệu</div>
          <div>Quy trình lên màu</div>
          <div>Lý thuyết màu sắc</div>
          <div>Layout & Composition</div>
          <div>Học phí</div>
        </div>

        {courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </Container>
  );
};

export default PricePanel;
