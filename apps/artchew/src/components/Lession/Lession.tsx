'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Modal, ModalContent, Title, Paragraph, Button } from 'rebear';
import { useAuthUser } from '@artchew/rebear-auth-lib';
import styles from './Lession.module.scss';
import src from './button.svg';

type LessionProps = {
  id: number;
  thumbnailUrl: string;
  courses: string[];
  title: string;
  description: string;
};

export const Lession = (props: LessionProps) => {
  const { id, thumbnailUrl, courses, title, description } = props;
  const router = useRouter();
  const authUser = useAuthUser();
  const [open, onOpenChange] = useState(false);

  const handleStart = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const userCourseId = authUser?.courseId;
    if (courses.includes(userCourseId)) {
      router.push(`/video/${id}`);
    } else {
      onOpenChange(true);
    }
  };

  return (
    <>
      <div className={styles.lession}>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          <a className={styles.buttonStart} href="#" onClick={handleStart}>
            <Image src={src} alt="" />
          </a>
        </div>
        <Title className={styles.title} level={3}>
          {title}
        </Title>
        <Paragraph>{description}</Paragraph>
      </div>

      <Modal open={open} onOpenChange={onOpenChange}>
        <ModalContent>
          <div className={styles.modalContent}>
            <Title level={3}>Thông báo</Title>
            <br />
            <Paragraph>Video này đã bị khóa.</Paragraph>
            <Paragraph>
              Bạn cần phải đăng kí khóa học để mở khóa video này.
            </Paragraph>
            <br />
            <Paragraph>Bạn có muốn đăng kí khóa học này không?</Paragraph>
            <br />
            <br />
            <Button variant="secondary" size="2xl">
              Đăng Kí Khoá Học
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Lession;
