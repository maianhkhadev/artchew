import Image from 'next/image';
import { Container } from '../Container';
import styles from './Footer.module.scss';
import srcLogo from './logo.svg';

export const Footer = () => {
  return (
    <header className={styles.footer}>
      <Container>
        <div className={styles.footerBar}>
          <Image className={styles.brand} src={srcLogo} alt="artchew" />
        </div>
      </Container>
    </header>
  );
};

export default Footer;
