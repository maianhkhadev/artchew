import { Title, Paragraph } from 'rebear';
import { useStudents } from '@artchew/data-access-students';
import { ButtonEditStudent } from '../ButtonEditStudent';
import { ButtonDeleteStudent } from '../ButtonDeleteStudent';
import styles from './TableStudents.module.scss';

export function TableStudents() {
  const { isPending, data: students = [] } = useStudents();

  return (
    <section className={styles.table}>
      <header className={styles.tableHeader}>
        <div>Student</div>
        <div>Class</div>
        <div>Status</div>
        <div>Actions</div>
      </header>
      <main>
        {students.map((student) => (
          <div key={student._id} className={styles.row}>
            <div>
              <Title level={6}>{student.name}</Title>
              <Paragraph>{student.email}</Paragraph>
            </div>
            <div>
              <Title level={6}>{student.courseId}</Title>
              <Paragraph>{student.time}</Paragraph>
            </div>
            <div>{student.status}</div>
            <div className={styles.actions}>
              <ButtonEditStudent id={student._id} />
              <ButtonDeleteStudent id={student._id} />
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default TableStudents;
