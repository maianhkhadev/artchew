'use client';
import { useParams } from 'next/navigation';
import { SectionStudentDetails } from '../../../components/SectionStudentDetails';
import styles from './page.module.scss';

export default function Student() {
  const { id } = useParams();

  return (
    <div className={styles.page}>
      <SectionStudentDetails id={id as string} />
    </div>
  );
}
