import { Title, Paragraph } from 'rebear';
import Image from 'next/image'
import styles from './Course.module.scss';
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
      <Title className={styles.name} level={3}>
        {title}
      </Title>
      <Paragraph>{numberOfLessions}</Paragraph>
      <Paragraph>{numberOfStudents}</Paragraph>
      <Paragraph>{time}</Paragraph>
      {availableLessions.map((availableLession, index) => (
        <Image
          key={index}
          src={availableLession ? srcCheck : srcUncheck}
          alt=""
        />
      ))}
      <Title className={styles.name} level={2}>
        {price} <sub>đ</sub>
      </Title>
    </div>
  );
};

export default Course;
