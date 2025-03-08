import { useState } from 'react';
import { FormLogin } from '../../components/FormLogin';
import styles from './Welcome.module.scss';

export function Welcome() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: any) => {}

  return (
    <div className={styles.page}>
      <FormLogin isLoading={isLoading} onSubmit={handleSubmit} />
    </div>
  );
}

export default Welcome;
