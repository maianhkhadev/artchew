import { Title, Paragraph, Button } from 'rebear';
import styles from './PricePanel.module.scss';

const articleNames = [
  'Phối cảnh',
  'Dựng hình',
  'Ánh sáng',
  'Line Art',
  'Anatomy căn bản',
  'Cách điệu',
  'Quy trình lên màu',
  'Lý thuyết màu sắc',
  'Layout & Composition',
];

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
        <Paragraph>{numberOfLessions} bài giảng</Paragraph>
        <Paragraph>{numberOfStudents}</Paragraph>
        <Paragraph>{time}</Paragraph>
      </div>

      <div className={styles.divider} />

      <main className={styles.courseContent}>
        {availableLessions.map((availableLession, index) => (
          <div key={index} className={styles.cell}>
            {availableLession ? articleNames[index] : '-'}
          </div>
        ))}
      </main>

      <div className={styles.divider} />

      <footer className={styles.courseFooter}>
        <Title level={2}>
          {price} <sup>đ</sup>
        </Title>

        <Button variant="tertiary" size="2xl" block>
          Đăng Kí
        </Button>
      </footer>
    </div>
  );
};

export default Course;
