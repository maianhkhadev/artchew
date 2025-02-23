import { Title, Paragraph } from 'rebear';
import Image from 'next/image';
import styles from './PricePanel.module.scss';
import srcCheck from './checked.svg';
import srcUncheck from './uncheck.svg';

type CourseProps = {
  title: string;
  numberOfLessions: string;
  numberOfStudents: string;
  time: string;
  price: number;
  availableLessions: boolean[];
};

export const Course = (props: CourseProps) => {
  const {
    title,
    numberOfLessions,
    numberOfStudents,
    time,
    price,
    availableLessions,
  } = props;

  return (
    <div className={styles.course}>
      <div className={styles.courseHeader}>
        <Title className={styles.name} level={3}>
          {title}
        </Title>
        <Paragraph>{numberOfLessions}</Paragraph>
        <Paragraph>{numberOfStudents}</Paragraph>
        <Paragraph>{time}</Paragraph>
      </div>

      <div className={styles.divider} />

      <div className={styles.courseContent}>
        <div className={styles.cell} />

        {availableLessions.map((availableLession, index) => (
          <div key={index} className={styles.cell}>
            <Image src={availableLession ? srcCheck : srcUncheck} alt="" />
          </div>
        ))}
      </div>

      <div className={styles.divider} />
      
      <div className={styles.courseFooter}>
        <Title level={2}>
          {price} <sup>đ</sup>
        </Title>
      </div>
    </div>
  );
};

export default Course;
