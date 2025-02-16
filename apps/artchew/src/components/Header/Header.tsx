'use client';
import Image from 'next/image';
import { Button, ButtonIcon } from 'rebear';
import { Container } from '../Container';
import styles from './Header.module.scss';
import src from './logo.svg';
import srcUser from './user.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerBar}>
          <Image className={styles.brand} src={src} alt="artchew" />

          <div className={styles.links}>
            <Button variant="primary" size="2xl">
              Giới thiệu
            </Button>
            <Button variant="primary" size="2xl">
              Khoá học
            </Button>
            <Button variant="primary" size="2xl">
              Video
            </Button>
            <Button variant="primary" size="2xl">
              Học viên
            </Button>
            <Button variant="primary" size="2xl">
              FAQ
            </Button>
          </div>

          <div className={styles.user}>
            <ButtonIcon
              variant="primary"
              icon={<Image src={srcUser} alt="artchew" />}
              size="xl"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
