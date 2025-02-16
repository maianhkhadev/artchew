'use client';
import Link from 'next/link';
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
            <Link href="/">
              <Button variant="primary" size="2xl">
                Giới thiệu
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="primary" size="2xl">
                Khoá học
              </Button>
            </Link>
            <Link href="/medias">
              <Button variant="primary" size="2xl">
                Video
              </Button>
            </Link>
            <Link href="/students">
              <Button variant="primary" size="2xl">
                Học viên
              </Button>
            </Link>
            <Link href="/questions">
              <Button variant="primary" size="2xl">
                FAQ
              </Button>
            </Link>
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
