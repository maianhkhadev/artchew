import { useMemo } from 'react';
import clsx from 'clsx';
import styles from './StudentStatus.module.scss';

type StudentStatusProps = {
  status: string;
};

export function StudentStatus(props: StudentStatusProps) {
  const { status } = props;

  const statusClass = useMemo(() => {
    if (status === 'active') {
      return styles.active;
    }

    if (status === 'inactive') {
      return styles.active;
    }

    return styles.registered;
  }, [status]);

  const classes = clsx([styles.status, statusClass]);

  return <span className={classes}>{status}</span>;
}

export default StudentStatus;
