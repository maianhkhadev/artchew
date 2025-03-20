'use client';
import { Container } from '../Container';
import { Course } from './Course';
import styles from './PricePanel.module.scss';

import courses from './courses.json';

export const PricePanel = () => {
  return (
    <Container>
      <div className={styles.pricePanel}>
        {courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </Container>
  );
};

export default PricePanel;
