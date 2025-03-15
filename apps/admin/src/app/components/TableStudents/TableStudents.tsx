import { useMemo } from 'react';
import { Title, Paragraph } from 'rebear';
import { useSearchParams } from 'react-router-dom';
import { useStudents } from '@artchew/data-access-students';
import { CourseName } from '@artchew/ui-course-name';
import { StudentStatus } from '@artchew/ui-student-status';
import { ButtonEditStudent } from '../ButtonEditStudent';
import { ButtonDeleteStudent } from '../ButtonDeleteStudent';
import styles from './TableStudents.module.scss';

export function TableStudents() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';
  const status = searchParams.get('status') ?? 'all';
  const { isPending, data: students = [] } = useStudents();

  const availableStudents = useMemo(() => {
    return students.filter((student) => {
      if (status !== 'all') {
        if (student.status !== status) {
          return false;
        }
      }

      if (keyword) {
        const name = student.name.toLowerCase();
        if (name.includes(keyword)) {
          return true;
        }

        const email = student.name.toLowerCase();
        if (email.includes(keyword)) {
          return true;
        }

        return false;
      }

      return true;
    });
  }, [isPending, keyword, status]);

  return (
    <section className={styles.table}>
      <header className={styles.tableHeader}>
        <div>Student</div>
        <div>Class</div>
        <div>Status</div>
        <div>Actions</div>
      </header>
      <main>
        {availableStudents.length === 0 && (
          <div className={styles.noData}>No data available</div>
        )}

        {availableStudents.map((student) => (
          <div key={student._id} className={styles.row}>
            <div>
              <Title level={6}>{student.name}</Title>
              <Paragraph>{student.email}</Paragraph>
            </div>
            <div>
              <CourseName id={student.courseId} />
              <Paragraph>{student.time}</Paragraph>
            </div>
            <div>
              <StudentStatus status={student.status} />
            </div>
            <div className={styles.actions}>
              <ButtonEditStudent id={student._id} data={student} />
              <ButtonDeleteStudent id={student._id} />
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default TableStudents;
