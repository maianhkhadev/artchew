'use client';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, ButtonIcon } from 'rebear';
import { IconMenu01, IconX } from 'rebear-icons';
import { useIsAuth } from '@artchew/rebear-auth-lib';
import { Container } from '@artchew/artchew-components';
import { SignInModal } from './SignInModal';
import { SignOutModal } from './SignOutModal';
import styles from './Header.module.scss';
import src from './logo.svg';
import srcUser from './user.svg';

export const Header = () => {
  const router = useRouter();
  const [open, onOpenChange] = useState(false);
  const [openMemu, onOpenMenuChange] = useState(false);
  const isAuth = useIsAuth();

  const handleShow = () => {
    onOpenChange(true);
  };

  const handleShowMemu = () => {
    onOpenMenuChange(true);
  };

  const handleCloseMemu = () => {
    onOpenMenuChange(false);
  };

  const handleRedirect = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const link = target.dataset.link;

    if (link) {
      router.push(link);
      onOpenMenuChange(false);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerBar}>
            <ButtonIcon
              className={styles.mobileMenuButton}
              variant="secondary"
              icon={<IconMenu01 />}
              onClick={handleShowMemu}
            />

            <Image className={styles.brand} src={src} alt="artchew" />

            <nav className={styles.links}>
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
                  Thư viện
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
            </nav>

            {isAuth && (
              <div className={styles.user}>
                <ButtonIcon
                  variant="primary"
                  icon={<Image src={srcUser} alt="artchew" />}
                  size="xl"
                  onClick={handleShow}
                />
              </div>
            )}

            {!isAuth && (
              <div className={styles.login}>
                <Button variant="primary" size="2xl" onClick={handleShow}>
                  Đăng nhập
                </Button>
              </div>
            )}
          </div>
        </Container>
      </header>

      <div className={clsx([styles.mobileMenu, openMemu && styles.active])}>
        <ButtonIcon
          className={styles.closeButton}
          variant="tertiary"
          size="sm"
          icon={<IconX />}
          onClick={handleCloseMemu}
        />

        <nav className={styles.links}>
          <Button
            variant="primary"
            size="2xl"
            data-link="/"
            onClick={handleRedirect}
          >
            Giới thiệu
          </Button>
          <Button
            variant="primary"
            size="2xl"
            data-link="/courses"
            onClick={handleRedirect}
          >
            Khoá học
          </Button>
          <Button
            variant="primary"
            size="2xl"
            data-link="/medias"
            onClick={handleRedirect}
          >
            Thư viện
          </Button>
          <Button
            variant="primary"
            size="2xl"
            data-link="/students"
            onClick={handleRedirect}
          >
            Học viên
          </Button>
          <Button
            variant="primary"
            size="2xl"
            data-link="/questions"
            onClick={handleRedirect}
          >
            FAQ
          </Button>
        </nav>
      </div>

      <SignInModal open={!isAuth && open} onOpenChange={onOpenChange} />

      <SignOutModal open={isAuth && open} onOpenChange={onOpenChange} />
    </>
  );
};

export default Header;
