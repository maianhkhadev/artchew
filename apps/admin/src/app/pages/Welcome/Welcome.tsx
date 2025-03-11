import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from 'rebear';
import { FormLogin } from '../../components/FormLogin';
import styles from './Welcome.module.scss';

export function Welcome() {
  const [isLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    const { email, password } = values;
    if (email === 'admin@artchew.com' && password === 'admin123') {
      sessionStorage.setItem('token', 'artchew_token');
      navigate("/students");
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Title level={2}>Artchew Admin</Title>
      </header>
      <main className={styles.main}>
        <FormLogin isLoading={isLoading} onSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default Welcome;
