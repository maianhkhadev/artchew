'use client';
import Image from 'next/image';
import { Title } from 'rebear';
import { Container } from '@artchew/artchew-components';
import styles from './Footer.module.scss';
import srcLogo from './logo.svg';
import srcMail from './mail.svg';
import srcPhone from './phone.svg';
import srcLocation from './location.svg';
import srcFacebook from './facebook.svg';
import srcInstagram from './instagram.svg';

export const Footer = () => {
  return (
    <header className={styles.footer}>
      <Container>
        <div className={styles.footerBar}>
          <Image className={styles.brand} src={srcLogo} alt="artchew" />

          <div className={styles.links}>
            <div className={styles.groupLinks}>
              <Title level={3}>Liên hệ</Title>
              <a href="mailto:artchew.class@gmail.com">
                <Image src={srcMail} alt="mail" />
                artchew.class@gmail.com
              </a>
              <a href="tel:0328420400">
                <Image src={srcPhone} alt="phone" />
                032 842 0400
              </a>
              <a href="#">
                <Image src={srcLocation} alt="location" />
                93 Nguyễn Phi Khanh, P. Tân Định, Q. 1
              </a>
            </div>

            <div className={styles.groupLinks}>
              <Title level={3}>Điều khoản sử dụng</Title>
              <a href="#" target="_blank">
                Chính sách về bảo mật
              </a>
              <a href="#" target="_blank">
                Chính sách và quy định chung
              </a>
              <a href="#" target="_blank">
                Chính sách Cookie
              </a>
            </div>

            <div className={styles.socials}>
              <a href="#" target="_blank">
                <Image src={srcFacebook} alt="facebook" />
              </a>
              <a href="#" target="_blank">
                <Image src={srcInstagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Footer;
