'use client';
import { Title, Paragraph } from 'rebear';
import { Course } from './Course';
import styles from './PricePanel.module.scss';

import courses from './courses.json';

export const PricePanel = () => {
  return (
    <div className={styles.studentReview}>
      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
};

export default PricePanel;
