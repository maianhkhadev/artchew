import { Title } from 'rebear';
import { TableStudents } from '../../../components/TableStudents';
import { ButtonCreateStudent } from '../../../components/ButtonCreateStudent';
import styles from './List.module.scss';

export function StudentList() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Title level={3}>Students</Title>
        <ButtonCreateStudent />
      </header>

      <main className={styles.main}>
        <TableStudents />
      </main>
    </div>
  );
}

export default StudentList;
